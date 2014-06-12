/*
 * Copyright (c) 1997-2014, SalesLogix, NA., LLC. All rights reserved.
 */

/**
 * @class Mobile.SalesLogix.Views._SlxGroupListBase
 *
 * @extends Sage.Platform.Mobile.List
 * @requires Sage.Platform.Mobile.List
 * @requires Sage.Platform.Mobile.Format
 * @requires Sage.Platform.Mobile.Utility
 * @requires Sage.Platform.Mobile.Convert
 *

 * @requires Mobile.SalesLogix.Views._CardLayoutListMixin
 * @requires Mobile.SalesLogix.Views._SlxGroupRightDrawerListMixin
 *
 */
define('Mobile/SalesLogix/Views/_SlxGroupListBase', [
    'dojo/_base/declare',
    'dojo/_base/array',
    'dojo/string',
    'dojo/json',
    'dojo/dom-construct',
    'Mobile/SalesLogix/Action',
    'Sage/Platform/Mobile/Format',
    'Sage/Platform/Mobile/Utility',
    'Sage/Platform/Mobile/Convert',
    'Mobile/SalesLogix/GroupUtility',
    'dojo/when',
    'dojo/_base/lang',
    'Sage/Platform/Mobile/Store/SData',
    'Sage/Platform/Mobile/List',
    'Mobile/SalesLogix/Views/_MetricListMixin',
    'Mobile/SalesLogix/Views/_CardLayoutListMixin',
    'Mobile/SalesLogix/Views/_SlxGroupRightDrawerListMixin'
], function(
    declare,
    array,
    string,
    json,
    domConstruct,
    action,
    format,
    utility,
    Convert,
    GroupUtility,
    when,
    lang,
    SDataStore,
    List,
    _MetricListMixin,
    _CardLayoutListMixin,
    _SlxGroupRightDrawerListMixin
) {

    return declare('Mobile.SalesLogix.Views._SlxGroupListBase', [List, _SlxGroupRightDrawerListMixin, _CardLayoutListMixin], {
        //Templates
        
        rowErrorTemplate: new Simplate([
              '<li>',
                 '<div>Error</div>',
             '</li>'
        ]),

        itemTemplate: new Simplate([
           // '<h3>{%: $$.getDescriptior($) %}</h3>',
        ]),

        joinFields: function(sep, fields) {
            return utility.joinFields(sep, fields);
        },
        //View Properties
        entityName: null,
        resourceKind: null,
        _currentGroupId: null,
        _currentGroup: null,
        _groupInitalized: false,

        selectedColumns: null,
        layout:null,

        icon: 'content/images/icons/Company_24.png',
        id: 'slx_group_list_base',
        allowSelection: false,
        enableActions: true,
        pageSize: 5,
        hashTagQueries: {
           
        },
        hashTagQueriesText: {
            
        },
        createIndicatorLayout: function() {
            return null;
        },
        getDescriptor: function(entity) {

            return entity.$descriptor || entity.$key || "unknown";
        },
        getCurrentGroup:function(){
            //if (!this._currentGroup) {
            //    this.setCurrentGroup(this.getDefaultGroup());
            //}
            return this._currentGroup;
        },
        setCurrentGroup: function(group) {
            if (group) {
                if (this._currentGroupId !== group.$key) {
                    this._groupInitalized = false;
                    this._currentGroup = group;
                    this._currentGroupId = group.$key;
                    App.preferences['default-group-' + this.entityName] = this._currentGroupId;
                    App.persistPreferences();
                }
            }
        },
        getDefaultGroup: function(){
            var groupList = App.preferences['groups-' + this.entityName];
            var defaultGroupId = App.preferences['default-group-' + this.entityName];
            var defaultGroup = null;
            var defaultGroupName = null;

            defaultGroupName = App.context.userOptions['DefaultGroup:' + this.entityName.toUpperCase()];
            if (defaultGroupName) {
                defaultGroupName = defaultGroupName.split(':')[1];
            }
            
            if (groupList && groupList.length > 0) {
                array.forEach(groupList, function (group) {
                    if (group.$key === defaultGroupId) {
                            defaultGroup = group;
                    } 
                });

                if (!defaultGroup) {
                    array.forEach(groupList, function (group) {
                        if (group.name === defaultGroupName) {
                            defaultGroup = group;
                        }
                    });

                }

                if (!defaultGroup) {
                    defaultGroup = groupList[0];
                }
                return defaultGroup;
            }
            else {
                this._requestGroup(defaultGroupName);
            }
            return null;
        },
        
        initGroup: function(){
            var group;            
              group = this.getCurrentGroup();
              if (!group) {
                  group = this.getDefaultGroup();
                  this.setCurrentGroup(group);
              }              
              if (group) {
                  this._onApplyGroup(group);
              }
        },
        requestData: function() {
            try{

                if (!this._groupInitalized) {
                    this.initGroup();
                }
                else {
                    this.inherited(arguments);
                }
            } catch (e) {

            }
        },

        _onApplyGroup: function (group) {
            var group, template = [], layout, selectColumns;

            
            if (!group) {
                //return;
                App.setPrimaryTitle(this.getGroupTitle({ displayName: '' }));
                //this.toggleRightDrawer(true);
                this._addGroup();
                throw new Error("group not found.");
            }

            // Set the toolbar title to the current group displayName
            App.setPrimaryTitle(this.getGroupTitle(group));

            if (this._groupInitalized) {
                return;
            }

            this.layout = GroupUtility.getLayout(group);

            this.selectColumns = GroupUtility.getColumNames(this.layout);

            template = array.map(this.layout, this.getItemLayoutTemplate);

            this.itemTemplate = new Simplate(template);

            // Create a custom request that the store will use to execute the group query
            this.request = GroupUtility.createGroupRequest({
                groupId: group.$key,
                connection: this.getConnection()
            });

            // Try to select the entity id as well
            this.selectColumns.push(group.family + 'ID');
            this.querySelect = this.selectColumns;

            this.queryOrderBy = '';
            this.idProperty = group.family.toUpperCase() + 'ID';
            this.labelProperty = group.family.toUpperCase();
            this.store = null;
            this.clear(true);
            this.refreshRequired = true;
            this._groupInitalized = true;
            this.requestData();
        },
        _requestGroup: function(groupName){
            var store = null, queryResults;

            if (typeof groupName === 'string' && groupName !== '') {
                store = new SDataStore({
                    service: App.services.crm,
                    resourceKind: 'groups',
                    contractName: 'system',
                    where: "((upper(family) eq '" + this.entityName.toUpperCase() + "') and (upper(Name) eq '" + groupName.toUpperCase() + "'))",
                    include: ['layout', 'tableAliases'],
                    idProperty: '$key',
                    applicationName: 'slx',
                    scope: this
                });
            }
            if (store) {

                queryResults = store.query();

                (function (context, queryResults) {

                    try {
                        when(queryResults, lang.hitch(context, function (groupFeed) {
                            this._onGroupRequestSuccess(groupFeed);
                        }));
                    }
                    catch (error) {
                        console.log('Error fetching group data:' + error);
                    }
                })(this, queryResults);
  
                /*
                when(queryResults,
                    lang.hitch(this, this._onGroupRequestSuccess, queryResults),
                    lang.hitch(this, this._onGroupRequestFaild)
                );
                */
            }
        },
        _onGroupRequestSuccess: function(result){
            var group;
            if (result.length > 0) {
                group = result[0];
                this.setCurrentGroup(group);
                this._addToGroupPrefrences([group], group.$key);
                this._onApplyGroup(group);
            } else {
                App.setPrimaryTitle(this.getGroupTitle({ displayName: '' }));
                this._selectGroup();
            }
        },
        _onGroupRequestFaild: function (result) {

            

        },
        getGroupTitle:function(group){
            return string.substitute('${0} - [ ${1} ]', [this.titleText,group.displayName]);
        },
        getItemLayoutTemplate: function(item) {
            var template;
            if (item.index === 0) {
                template = ["<h4><strong>", item.caption, " : {%= $$.getFormatterByLayout(" + json.stringify(item) + ")($['" + item.alias.toUpperCase() + "']) %}", "</strong></h4>"].join('');
            } else {
                template = ["<h4>", item.caption, " : {%= $$.getFormatterByLayout(" + json.stringify(item) + ")($['" + item.alias.toUpperCase() + "']) %}", "</h4>"].join('');
            }
            return template;

        },
        getFormatterByLayout: function(layoutItem) {
            return GroupUtility.getFormatterByLayout(layoutItem);
        },
        formatSearchQuery: function(searchQuery) {
            var field = this.layout[0];
            return string.substitute('${0} like "${1}%"', [field.alias,this.escapeSearchQuery(searchQuery.toUpperCase())]);
        },
    });
});

