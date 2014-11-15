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
define('Mobile/SalesLogix/Models/OpportunityModel', [
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

    var model= declare('Mobile.SalesLogix.Models.OpportunityModel', _ModelBase, {
        
        /**
         * @property {String}
         * The unique (within the current form) name of the model
         */
        name: 'OpportuntiyModel',
        displayName: 'Opportunity',
        displayNamePlural: 'Opprtunities',
        entityName: 'Opportunity',
        primaryKey: 'OpportunityId',
        adapterMap: {'SData': { resourceKind: 'opportunities' } },
        createProperties: function() {
            var prop;
            prop = this.properties || (this.properties = [{
                name: 'OpportunityId',
                displayName: 'OpportunityId',
                propertyName: 'OpportunityId',
                type: 'Id',
                isPrimaryKey: true
            },{
                name: 'Description',
                displayName: 'Description',
                propertyName: 'Destription',
                type: 'String',
                size: 128,
                validator: validator.notEmpty,
                showInList: true,
                showInDetail: true,
                showInEdit: true,
                showInSummary: true,
            }, {
                name: 'AccountId',
                displayName: 'AccountId',
                propertyName: 'AccountId',
                type: 'Id',
                
            },{
                name: 'Status',
                displayName: 'Status',
                propertyName: 'Status',
                type: 'Piscklist',
                showInList: true,
                showInDetail: true,
                showInEdit: true,
                showInSummary: true,
            }, {
                name: 'Stage',
                displayName: 'Stage',
                propertyName: 'Stage',
                type: 'String',
                showInList: true,
                showInDetail: true,
                showInEdit: true,
                showInSummary: true,
            }, {
                name: 'Potentail',
                displayName: 'Potentail',
                propertyName: 'Potentail',
                type: 'Currency',
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
                name: 'Account',
                displayName: 'Account',
                propertyName: 'Account',
                type: 'ManyToOne',
                parentProperty: 'AccountId',
                childEntity: 'Account',
                childProperty:'AccountId'
            },{
                name: 'History',
                displayName: 'History',
                propertyName: 'History',
                type: 'OnToMany',
                parentProperty: 'OpportunityId',
                childEntity: 'History',
                childProperty: 'OpportunityId',
                includeInParent: true,
                //adapterMap: { 'SData': { dataPath: 'OpportunityId' } },

            }, {
                name: 'Products',
                displayName: 'Products',
                propertyName: 'Products',
                type: 'OnToMany',
                parentProperty: 'OpportunityId',
                childEntity: 'OpportunityProduct',
                childProperty: 'OpportunityId',
                includeInParent: true,
                adapterMap: { 'SData': { dataPath: 'Opportunity.id' } },

            }]);
            return rel;
        }
    });
    return ModelManager.register('Opportunity', model);
});
