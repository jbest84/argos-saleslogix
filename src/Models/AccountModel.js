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
 * @requires Sage/Platform/Mobile/Models/Local/_LocalModel
 */
define('Mobile/SalesLogix/Models/AccountModel', [
    'dojo/_base/declare',
    'dojo/_base/lang',
    'Sage/Platform/Mobile/Models/Validator',
    'Sage/Platform/Mobile/Models/_ModelBase',
    'Sage/Platform/Mobile/Models/ModelManager',
    'Mobile/SalesLogix/Action',
], function(
    declare,
    lang,
    validator,
    _ModelBase,
    ModelManager,
    action
) {

    var model= declare('Mobile.SalesLogix.Models.AccountModel', _ModelBase, {
        
        accountModelText: 'Account',
        accountText: 'Account',

        /**
         * @property {String}
         * The unique (within the current form) name of the model
         */
        name: 'AccountModel',
        displayName: 'Account',
        displayNamePlural: 'Accounts',
        entityName: 'Account',
        primaryKey: 'AccountId',
        adapterMap: {'SData': { resourceKind: 'accounts' } },
        createProperties: function() {
            var prop;
            prop = this.properties || (this.properties = [{
                name: 'AccountId',
                displayName: 'AccountId',
                propertyName: 'AccountId',
                type: 'Id',
                isPrimaryKey: true
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
                showInSummary: true,
                autoFocus: true,
                isDescriptor: true
            }, {
                name: 'MainPhone',
                displayName: 'Main Phone',
                propertyName: 'MainPhone',
                type: 'Phone',
                size: 64,
                validator: validator.notEmpty,
                showInList: true,
                showInDetail: true,
                showInEdit: true,
                showInSummary: true,
                isDescriptor: true
            }, {
                name: 'Address',
                displayName: 'Address',
                propertyName: 'Address',
                type: 'Object',
                adapterMap: { 'SData': { dataPath: 'Address/*' } },
                relationship:'MailingAddress',
                showInList: true,
                showInDetail: true,
                showInEdit: true,
                showInSummary: true,
            }, {
                name: 'AccountManager',
                displayName: 'Acct. Manager',
                propertyName: 'AccountManager',
                type: 'User',
                adapterMap: { 'SData': { dataPath: 'AccountManager' } },
                relationship: 'AccountManager',
                showInList: false,
                showInDetail: true,
                showInEdit: true,
                showInSummary: true,
            }]);
            return prop;
        },

        createRelationships: function() {
            var rel;
            rel = this.relationships || (this.relationships = [{
                name: 'MailingAddress',
                displayName: 'Mailing Address',
                propertyName: 'MailingAddress',
                type: 'ManyToOne',
                parentEntity: 'Account',
                parentProperty: 'AddressId',
                childEntity: 'Address',
                childProperty:'AddressId'
            },{
                name: 'AccountManager',
                displayName: 'Acc Manager',
                propertyName: 'AccountManager',
                type: 'ManyToOne',
                parentEntity: 'Account',
                parentProperty: 'AccountMamnagerId',
                childEntity: 'UserInfo',
                childProperty:'UserId'
            }, {
                name: 'Addresses',
                displayName: 'Addresses',
                propertyName: 'Addresses',
                type: 'OnToMany',
                parentEntity: 'Account',
                parentProperty: 'AccountId',
                childEntity: 'Address',
                childProperty: 'EntityId'

            },{
                name: 'Contacts',
                displayName: 'Contacts',
                propertyName: 'Contacts',
                type: 'OnToMany',
                parentEntity: 'Account',
                parentProperty: 'AccountId',
                childEntity: 'Contact',
                childProperty: 'AccountId',
                includeInParent: true,
                adapterMap: { 'SData': { dataPath: 'Account.id' } },

            }, {
                name: 'History',
                displayName: 'History',
                propertyName: 'History',
                type: 'OnToMany',
                parentEntity: 'Account',
                parentProperty: 'AccountId',
                childEntity: 'History',
                childProperty: 'AccountId',
                includeInParent: true,
                adapterMap: { 'SData': { dataPath: 'AccountId' } },

            }, {
                name: 'Activity',
                displayName: 'Activity',
                propertyName: 'Activity',
                type: 'OnToMany',
                parentEntity: 'Account',
                parentProperty: 'AccountId',
                childEntity: 'Activitiy',
                childProperty: 'AccountId'

            }, {
                name: 'Attachments',
                displayName: 'Attachments',
                propertyName: 'Attachments',
                type: 'OnToMany',
                parentEntity: 'Account',
                parentProperty: 'AccountId',
                childEntity: 'Attachments',
                childProperty: 'AccountId'

            }]);
            return rel;
        },
        createActions: function () {
            var actions = this.actions || (this.actions = [{
                id: 'edit',
                cls: 'fa fa-pencil fa-2x',
                label: 'Edit',
                action: 'navigateToEditView'
            }, {
                id: 'callMain',
                cls: 'fa fa-phone-square fa-2x',
                label: 'Call',
                enabled: action.hasProperty.bindDelegate(this, 'MainPhone'),
                fn: action.callPhone.bindDelegate(this, 'MainPhone')
            }, {
                id: 'viewContacts',
                label: 'View Contacts',
               // fn: this.navigateToRelatedView.bindDelegate(this, 'contact_related', 'Account.id eq "${0}"')
            }, {
                id: 'addNote',
                cls: 'fa fa-edit fa-2x',
                label: 'Add Note',
                //fn: action.addNote.bindDelegate(this),
                fn:this.addNote,
                showInList: true
            }, {
                id: 'addActivity',
                cls: 'fa fa-calendar fa-2x',
                label: 'Schedule Activity',
                fn: action.addActivity.bindDelegate(this)
            }, {
                id: 'addAttachment',
                cls: 'fa fa-paperclip fa-2x',
                label: 'Add Attachmnet',
                fn: action.addAttachment.bindDelegate(this)
            }]

            );
            return actions;
        },
        addNote: function (action, selection) {
            
            var context = {
                entity: selection.data,
                descriptor: selection.data.$descriptor,
                key: selection.data.$key
            }
           
            var view = App.OfflineManager.getEditView({entityName:'History'}); 

            if (view) {
                view.show({entityName:'History',context: context, insert: true });
            }
        }
    });
    return ModelManager.register('Account', model);
});
