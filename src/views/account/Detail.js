/// <reference path="../../../../../argos-sdk/libraries/ext/ext-core-debug.js"/>
/// <reference path="../../../../../argos-sdk/libraries/sdata/sdata-client-debug"/>
/// <reference path="../../../../../argos-sdk/libraries/Simplate.js"/>
/// <reference path="../../../../../argos-sdk/src/View.js"/>
/// <reference path="../../../../../argos-sdk/src/Detail.js"/>

Ext.namespace("Mobile.SalesLogix.Account");

(function() {
    Mobile.SalesLogix.Account.Detail = Ext.extend(Sage.Platform.Mobile.Detail, {
        //Localization
        accountText: 'account',
        acctMgrText: 'acct mgr',
        addressText: 'address',
        businessDescriptionText: 'bus desc',
        createDateText: 'create date',
        createUserText: 'create user',
        faxText: 'fax',
        importSourceText: 'lead source',
        industryText: 'industry',
        notesText: 'notes',
        ownerText: 'owner',
        phoneCallHistoryTitle: 'Phone Call',        
        phoneText: 'phone',
        historyTypeText: {
            'atPhoneCall': 'Phone Call'
        },
        actionsText: 'Actions',
        relatedActivitiesText: 'Activities',
        relatedContactsText: 'Contacts',
        relatedHistoriesText: 'History',
        relatedItemsText: 'Related Items',
        relatedNotesText: 'Notes',
        relatedOpportunitiesText: 'Opportunities',
        relatedTicketsText: 'Tickets',
        statusText: 'status',
        subTypeText: 'subtype',
        titleText: 'Account',
        typeText: 'type',
        webText: 'web',
        callMainNumberText: 'Call main number',
        scheduleActivityText: 'Schedule activity',
        viewAddressText: 'View address',

        //View Properties
        id: 'account_detail',
        editView: 'account_edit',
        historyEditView: 'history_edit',
        querySelect: [
            'AccountManager/UserInfo/FirstName',
            'AccountManager/UserInfo/LastName',
            'AccountName',
            'Address/*',
            'BusinessDescription',
            'CreateDate',
            'CreateUser',
            'Description',
            'Fax',
            'GlobalSyncID',
            'ImportSource',
            'Industry',
            'LeadSource/Description',
            'MainPhone',
            'Notes',
            'Owner/OwnerDescription',
            'Status',
            'SubType',
            'Type',
            'WebAddress'
        ],
        resourceKind: 'accounts',

        navigateToHistoryInsert: function(type, entry) {
            var view = App.getView(this.historyEditView);
            if (view)
            {
                view.show({
                    title: this.historyTypeText[type],
                    template: entry,
                    insert: true
                });
            }
        },
        recordCallToHistory: function() {
            var entry = {
                'Type': 'atPhoneCall',
                'AccountId': this.entry['$key'],
                'AccountName': this.entry['AccountName'],
                'Description': String.format("Called {0}", this.entry['AccountName']),
                'UserId': App.context && App.context.user['$key'],
                'UserName': App.context && App.context.user['UserName'],
                'Duration': 15,
                'CompletedDate': (new Date())
            };
            
            this.navigateToHistoryInsert('atPhoneCall', entry);
        },
        callMainPhone: function() {
            this.recordCallToHistory();

            App.initiateCall(this.entry['MainPhone']);
        },
        viewAddress: function() {
            App.showMapForAddress(Mobile.SalesLogix.Format.address(this.entry['Address'], true, ' '));
        },
        scheduleActivity: function() {
            App.navigateToActivityInsertView();
        },
        createLayout: function() {
            return this.layout || (this.layout = [{
                options: {
                    list: true,
                    title: this.actionsText,
                    cls: 'action-list'
                },
                as: [{
                    name: 'MainPhone',
                    label: this.callMainNumberText,
                    icon: 'content/images/icons/Schedule_Call_24x24.gif',
                    action: 'callMainPhone',
                    renderer: Mobile.SalesLogix.Format.phone.createDelegate(this, [false], true)
                },{
                    name: 'AccountName',
                    label: this.scheduleActivityText,
                    icon: 'content/images/icons/job_24.png',  
                    action: 'scheduleActivity'
                },{
                    name: 'Address',
                    label: this.viewAddressText,
                    icon: 'content/images/icons/internet_24.png',
                    action: 'viewAddress',
                    renderer: Mobile.SalesLogix.Format.address.createDelegate(this, [true, ' '], true)
                }]
            },{
                options: {
                    title: this.detailsText
                },
                as: [{
                    name: 'AccountName',
                    label: this.accountText
                },{
                    name: 'WebAddress',
                    label: this.webText,
                    renderer: Mobile.SalesLogix.Format.link
                },{
                    name: 'Fax',
                    label: this.faxText,
                    renderer: Mobile.SalesLogix.Format.phone
                },{
                    name: 'Type',
                    label: this.typeText
                },{
                    name: 'SubType',
                    label: this.subTypeText
                },{
                    name: 'Status',
                    label: this.statusText
                },{
                    name: 'Industry',
                    label: this.industryText,
                    type: 'text'
                },{
                    name: 'BusinessDescription',
                    label: this.businessDescriptionText,
                    type: 'text'
                },{
                    name: 'AccountManager.UserInfo',
                    label: this.acctMgrText,
                    tpl: Mobile.SalesLogix.Template.nameLF
                },{
                    name: 'Owner.OwnerDescription',
                    label: this.ownerText
                },{
                    name: 'LeadSource.Description',
                    label: this.importSourceText
                }]
            },
            {
                options: {
                    list: true,
                    title: this.relatedItemsText
                },
                as: [{
                    icon: 'content/images/icons/job_24.png',
                    label: this.relatedActivitiesText,
                    where: this.formatRelatedQuery.createDelegate(
                        this, ['AccountId eq "{0}"'], true
                    ),
                    view: 'activity_related'
                },{
                    icon: 'content/images/icons/note_24.png',
                    label: this.relatedNotesText,
                    where: this.formatRelatedQuery.createDelegate(
                        this, ['AccountId eq "{0}" and Type eq "atNote"'], true
                    ),
                    view: 'note_related'
                },{
                    icon: 'content/images/icons/contact_24.png',
                    label: this.relatedContactsText,
                    where: this.formatRelatedQuery.createDelegate(
                        this, ['Account.id eq "{0}"'], true
                    ),
                    view: 'contact_related'
                },{
                    icon: 'content/images/icons/opportunity_24.png',
                    label: this.relatedOpportunitiesText,
                    where: this.formatRelatedQuery.createDelegate(
                        this, ['Account.id eq "{0}"'], true
                    ),
                    view: 'opportunity_related'
                },{
                    icon: 'content/images/icons/job_24.png',
                    label: this.relatedTicketsText,
                    where: this.formatRelatedQuery.createDelegate(
                        this, ['Account.id eq "{0}"'], true
                    ),
                    view: 'ticket_related'
                },{
                    icon: 'content/images/icons/journal_24.png',
                    label: this.relatedHistoriesText,
                    where: this.formatRelatedQuery.createDelegate(
                        this, ['AccountId eq "{0}" and Type ne "atNote" and Type ne "atDatabaseChange"'], true
                    ),
                    view: 'history_related'
                }]
            }]);
        }
    });
})();