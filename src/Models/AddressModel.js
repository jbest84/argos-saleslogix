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
 * @requires Sage/Platform/Mobile/Models/_ModelBase
 */
define('Mobile/SalesLogix/Models/AddressModel', [
    'dojo/_base/declare',
    'dojo/_base/lang',
    'Sage/Platform/Mobile/Models/Validator',
    'Sage/Platform/Mobile/Models/_ModelBase',

], function(
    declare,
    lang,
    validator,
    _ModelBase
) {

    return declare('Mobile.SalesLogix.Models.AddressModel', _ModelBase, {
        
       
        /**
         * @property {String}
         * The unique (within the current form) name of the model
         */
        name: 'AddressModel',
        displayName: 'Address',
        entityName: 'Address',
        primaryKey: 'AddressId',
        adapterMap: { 'SData': { resourceKind: 'addresses' } },
        createProperties: function() {
            var prop;
            prop = this.properties || (this.properties = [{
                name: 'AddressId',
                displayName: 'AddressId',
                propertyName: 'AddressId',
                type: 'Id',
                adapterMap: { 'SData': { dataPath: '$key' } },
                isPrimary: true
            },{
                name: 'EntityId',
                displayName: 'EntityId',
                propertyName: 'EntityId',
                type: 'Id',
                showInEdit: true,
            }, {
                name: 'Type',
                displayName: 'Type',
                propertyName: 'Type',
                type: 'String',
                size: 32

            },{
                name: 'Description',
                displayName: 'Description',
                propertyName: 'Description',
                type: 'String',
                size: 128,
                validator: validator.notEmpty,
                showInList: true,
                showInDetail: true,
                showInEdit: true,
                showInSummary: true,
                autoFocus: true
            }, {
                name: 'City',
                displayName:'City',
                propertyName: 'City',
                type: 'Picklist',
                typeOptions: {
                    picklistName:'City'
                },
                size: 64,
                showInList: true,
                showInDetail: true,
                showInEdit: true,
                showInSummary: true,
            }, {
                name: 'State',
                displayName: 'State',
                propertyName: 'State',
                type: 'Picklist',
                typeOptions: {
                    picklistName: 'State'
                },
                size: 64,
                showInList: true,
                showInDetail: true,
                showInEdit: true,
                showInSummary: true,
            }, {
                name: 'Country',
                displayName: 'Country',
                propertyName: 'Country',
                type: 'Picklist',
                typeOptions: {
                    picklistName: 'Country'
                },
                size: 64,
                showInList: true,
                showInDetail: true,
                showInEdit: true,
                showInSummary: true,
            }, {
                name: 'PostalCode',
                displayName: 'PostalCode',
                propertyName: 'PostalCode',
                type: 'String',
                size: 32,
                showInList: true,
                showInDetail: true,
                showInEdit: true,
                showInSummary: true,
            }, {
                name: 'Address1',
                displayName: 'Address1',
                propertyName: 'Address1',
                type: 'String',
                size: 64,
                showInList: true,
                showInDetail: true,
                showInEdit: true,
                showInSummary: true,
            }, {
                name: 'Address2',
                displayName: 'Address2',
                propertyName: 'Address2',
                type: 'String',
                size: 64,
                showInList: true,
                showInDetail: true,
                showInEdit: true,
                showInSummary: true,
            }, {
                name: 'Address3',
                displayName: 'Address3',
                propertyName: 'Address3',
                type: 'String',
                size: 64,
                showInList: true,
                showInDetail: true,
                showInEdit: true,
                showInSummary: true,
            }]);
            return prop;
        }


    });

});
