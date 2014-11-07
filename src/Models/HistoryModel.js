/* Copyright (c) 2014, SalesLogix, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @class Mobile.SalesLogix.Models.Model
 
 * @alternateClassName _ModelBase
 * @requires Sage/Platform/Mobile/Models/Local/_ModelBase
 */
define('Mobile/SalesLogix/Models/HistoryModel', [
    'dojo/_base/declare',
    'dojo/_base/lang',
    'Sage/Platform/Mobile/Models/Validator',
    'Sage/Platform/Mobile/Models/_ModelBase',
    'Sage/Platform/Mobile/Models/ModelManager'
], function(
    declare,
    lang,
    validator,
    _ModelBase,
    ModelManager
) {

    var model= declare('Mobile.SalesLogix.Models.HistoryModel', _ModelBase, {
        
        /**
         * @property {String}
         * The unique (within the current form) name of the model
         */
        name: 'HistoryModel',
        displayName: 'History',
        displayNamePlural: 'History',
        entityName: 'History',
        primaryKey: 'HistoryId',
        adapterMap: {'SData': { resourceKind: 'history' } },
        createProperties: function() {
            var prop;
            prop = this.properties || (this.properties = [{
                name: 'HistoryId',
                displayName: 'HistoryId',
                propertyName: 'HistoryId',
                type: 'Id',
                isPrimaryKey: true
            },{
                name: 'AccountId',
                displayName: 'AccountId',
                propertyName: 'AccountId',
                type: 'Id'
            },{
                name: 'ContactId',
                displayName: 'ContactId',
                propertyName: 'ContactId',
                type: 'Id'
            },{
                name: 'AccountName',
                displayName: this.accountText,
                propertyName: 'AccountName',
                type: 'String',
                size: 64,
                validator: validator.notEmpty,
                showInList: true,
                showInDetail: true,
                showInEdit: true,
                showInSummary: true
            }, {
                name: 'ContactName',
                displayName: 'Contact Name',
                propertyName: 'ContactName',
                type: 'String',
                size: 64,
                validator: validator.notEmpty,
                showInList: true,
                showInDetail: true,
                showInEdit: true,
                showInSummary: true
            },{
                name: 'OpportunityId',
                displayName: 'OpportunityId',
                propertyName: 'OpportunityId',
                type: 'Id'
            },{
                name: 'OpportunityName',
                displayName: 'Opportunity',
                propertyName: 'OpportunityName',
                type: 'String',
                size: 64,
                validator: validator.notEmpty,
                showInList: true,
                showInDetail: true,
                showInEdit: true,
                showInSummary: true
            }, {
                name: 'Description',
                displayName: 'Regarding',
                propertyName: 'Description',
                type: 'String',
                size: 64,
                validator: validator.notEmpty,
                showInList: true,
                showInDetail: true,
                showInEdit: true,
                showInSummary: true
            },{
                name: 'Type',
                displayName: 'Type',
                propertyName: 'Type',
                type: 'String',
                size: 64,
                validator: validator.notEmpty,
                showInList: true,
                showInDetail: true,
                showInEdit: true,
                showInSummary: true
            },{
                name: 'LeaderId',
                displayName: 'Leader',
                propertyName: 'LeaderId',
                type: 'User',
                //adapterMap: { 'SData': { dataPath: 'User/*' } },
                relationship: 'Leader',
                showInList: true,
                showInDetail: true,
                showInEdit: true,
                showInSummary: true,
            },{
                name: 'LeaderName',
                displayName: 'Leader Name',
                propertyName: 'LeaderName',
                type: 'String',
                showInList: true,
                showInDetail: true,
                showInEdit: true,
                showInSummary: true,
            }, {
                name: 'StartDate',
                displayName: 'Start Date',
                propertyName: 'StartDate',
                type: 'DateTime',
                showInList: true,
                showInDetail: true,
                showInEdit: true,
                showInSummary: true,
            }, {
                name: 'CompletedOn',
                displayName: 'Completed On',
                propertyName: 'CompletedOn',
                type: 'DateTime',
                showInList: true,
                showInDetail: true,
                showInEdit: true,
                showInSummary: true,
            }, {
                name: 'Category',
                displayName: 'Category',
                propertyName: 'Category',
                type: 'Picklist',
                showInList: true,
                showInDetail: true,
                showInEdit: true,
                showInSummary: true,
            }, {
                name: 'Notes',
                displayName: 'Notes',
                propertyName: 'Notes',
                type: 'String',
                showInList: true,
                showInDetail: true,
                showInEdit: true,
                showInSummary: true,
            }, {
                name: 'LongNotes',
                displayName: 'LongNotes',
                propertyName: 'LongNotes',
                type: 'string',
                showInDetail: true,
                showInEdit: true
            }]);
            return prop;
        },

        createRelationships: function() {
            var rel;
            rel = this.relationships || (this.relationships = [{
                name: 'Leader',
                displayName: 'Leader',
                propertyName: 'AccountManager',
                type: 'ManyToOne',
                parentEntity: 'History',
                parentProperty: 'LeaderId',
                childEntity: 'UserInfo',
                childProperty:'UserId'
            }]);
            return rel;
        }
    });
    return ModelManager.register('History', model);
});
