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
define('Mobile/SalesLogix/Models/ContactModel', [
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

    var model= declare('Mobile.SalesLogix.Models.ContactModel', _ModelBase, {
        
        contactModelText: 'Contact',
        contactText: 'Contact',

        /**
         * @property {String}
         * The unique (within the current form) name of the model
         */
        name: 'ContactModel',
        displayName: 'Contact',
        displayNamePlural: 'Contacts',
        entityName: 'Contact',
        primaryKey: 'ContactId',
        adapterMap: {'SData': { resourceKind: 'contacts' } },
        createProperties: function() {
            var prop;
            prop = this.properties || (this.properties = [{
                name: 'ContactId',
                displayName: 'ContactId',
                propertyName: 'ContactId',
                type: 'Id',
                isPrimaryKey: true
            },{
                name: 'AccountId',
                displayName: 'AccountId',
                propertyName: 'AccountId',
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
                name: 'FirstName',
                displayName: 'First Name',
                propertyName: 'FirstName',
                type: 'String',
                size: 64,
                validator: validator.notEmpty,
                showInList: true,
                showInDetail: true,
                showInEdit: true,
                showInSummary: true
            },{
                name: 'LastName',
                displayName: 'Last Name',
                propertyName: 'LastName',
                type: 'String',
                size: 64,
                validator: validator.notEmpty,
                showInList: true,
                showInDetail: true,
                showInEdit: true,
                showInSummary: true
            },{
                name: 'WorkPhone',
                displayName: 'Work Phone',
                propertyName: 'WorkPhone',
                type: 'Phone',
                size: 64,
                validator: validator.notEmpty,
                showInList: true,
                showInDetail: true,
                showInEdit: true,
                showInSummary: true
            }, {
                name: 'AddressId',
                displayName: 'AddressId',
                propertyName: 'AddressId',
                type: 'Id',
                adapterMap: { 'SData': { dataPath: 'Address/*' } },
                relationship:'MailingAddress',
                showInList: true,
                showInDetail: true,
                showInEdit: true,
                showInSummary: true,
            }, {
                name: 'AccountManagerId',
                displayName: 'AddressId',
                propertyName: 'AddressId',
                type: 'Id',
                adapterMap: { 'SData': { dataPath: 'AccountManager' } },
                relationship: 'AccountManager',
                showInList: true,
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
                parentEntity: 'Contact',
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
                parentEntity: 'Contact',
                parentProperty: 'ContactId',
                childEntity: 'Address',
                childProperty: 'EntityId'

            }, {
                name: 'History',
                displayName: 'History',
                propertyName: 'History',
                type: 'OnToMany',
                parentEntity: 'Contact',
                parentProperty: 'ContactId',
                childEntity: 'History',
                childProperty: 'ContactId'

            }]);
            return rel;
        }
    });
    return ModelManager.register('Contact', model);
});
