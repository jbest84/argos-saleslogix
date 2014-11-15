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
define('Mobile/SalesLogix/Models/OppProductModel', [
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

    var model= declare('Mobile.SalesLogix.Models.OppProductModel', _ModelBase, {
        
        /**
         * @property {String}
         * The unique (within the current form) name of the model
         */
        name: 'OppProductModel',
        displayName: 'Opp Product',
        displayNamePlural: 'Opp Products',
        entityName: 'OpportunityProduct',
        primaryKey: 'OpportunityProductId',
        adapterMap: { 'SData': { resourceKind: 'opportunityproducts' } },
        createProperties: function() {
            var prop;
            prop = this.properties || (this.properties = [{
                name: 'OpportunityProductId',
                displayName: 'OpportunityProductId',
                propertyName: 'OpportunityProductId',
                type: 'Id',
                isPrimaryKey: true
            }, {
                name: 'OpportunityId',
                displayName: 'OpportunityId',
                propertyName: 'Opportunityd',
                type: 'Id',
                disabled: true,
            }, {
                name: 'ProductId',
                displayName: 'ProductId',
                propertyName: 'ProductId',
                type: 'Id'
            }, {
                name: 'ProductName',
                displayName: 'Name',
                propertyName: 'ProductName',
                type: 'String',
                size: 64,
                showInList: true,
                showInDetail: true,
                showInEdit: true,
                showInSummary: true,
                adapterMap: { 'SData': { dataPath: 'Product/Name' } },
            },{
                name: 'ProductFamily',
                displayName: 'Family',
                propertyName: 'ProductFamily',
                type: 'String',
                size: 64,
                showInList: true,
                showInDetail: true,
                showInEdit: true,
                showInSummary: true,
                adapterMap: { 'SData': { dataPath: 'Product/Family' } },
            },{
                name: 'Price',
                displayName: 'Price',
                propertyName: 'Price',
                type: 'Currency',
                showInList: true,
                showInDetail: true,
                showInEdit: true,
                showInSummary: true
            }, {
                name: 'Discount',
                displayName: 'Discount',
                propertyName: 'Discount',
                type: 'Currency',
                showInList: true,
                showInDetail: true,
                showInEdit: true,
                showInSummary: true
            }, {
                name: 'Qunatity',
                displayName: 'Qunatity',
                propertyName: 'Qunatity',
                type: 'Number',
                showInList: true,
                showInDetail: true,
                showInEdit: true,
                showInSummary: true
            }, {
                name: 'ExtendedPrice',
                displayName: 'ExtendedPrice',
                propertyName: 'ExtendedPrice',
                type: 'Currency',
                showInList: true,
                showInDetail: true,
                showInEdit: true,
                showInSummary: true
            }]);
            return prop;
        },
       createRelationships: function() {
            var rel;
            rel = this.relationships || (this.relationships = [{
                name: 'Product',
                displayName: 'Product',
                propertyName: 'Product',
                type: 'ManyToOne',
                parentProperty: 'ProductId',
                childEntity: 'Product',
                childProperty:'ProductId'
            }]);
            return rel;
        }
    });
    return ModelManager.register('OpportunityProduct', model);
});
