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
 * @class Mobile.SalesLogix.Services._ModelServiceBase
 * The base class for all services.
 *
 * 
 * @alternateClassName _ModelServiceBase

 */
define('Mobile/SalesLogix/Services/_ModelServiceBase', [
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dojo/when',
    'dojo/_base/Deferred',
    'dojo/string',
    'Sage/Platform/Mobile/Models/_ModelBase',
    'Sage/Platform/Mobile/Services/_ServiceBase'

], function(
    declare,
    lang,
    when,
    Deferred,
    string,
    _ModelBase,
    _ServiceBase
) {

    return declare('Mobile.SalesLogix.Services._ModelServiceBase', [_ServiceBase], {
        
        
        /**
         * @property {String}
         * The unique (within the current form) name of the service
         */
        name: 'modelServiceBase',
        service: null,
        Model: _ModelBase,
        nameProperty: 'Name',
        resourceKind: null,
        contractName:'metadata',
        constructor: function(o) {
            this.service = App.getService(false);
            lang.mixin(this, o);
        },
        init: function () {
            //this.initModelData();
        },
        initModelData: function () {
            var dataPromise;
            dataPromise = this.getModels();
            dataPromise.then(function (models) {
                if (models) {
                    
                }
            });

        },
        getModel: function (name, refresh) {
            var request, queryResults, deferred, model;
            deferred = new Deferred();
            model = this.store[name];
            if ((!model) || refresh) {
                request = this.getModelRequest(name);
                queryResults = request.read({
                    success: function (modelData) {
                        model = this.addModelData(name, modelData);
                        deferred.resolve(model);
                    }.bind(this),
                    failure: function (err) {
                        deferred.reject(err);
                    }.bind(this)
                });

            } else {
                deferred.resolve(model);
            }
            return deferred.promise;
        },
        getModels: function (queryOptions, refresh) {
            var request, queryResults, deferred, models;
            deferred = new Deferred();
            models = [];
            if (refresh) {
                this.store = {};
            }
            for (var name in this.store) {
               models.push(this.store[name]);
            }
            if ((models.length < 1)||refresh) {
                request = this.getModelsRequest(queryOptions);
                queryResults = request.read({
                    success: function (result) {
                        var model, modelData;
                        if(result.$resources){
                            result.$resources.forEach(function(modelData){
                                model = this.addModelData(modelData.entity[this.nameProperty], modelData);
                                models.push(model);
                            }.bind(this));
                        }
                        deferred.resolve(models);
                    }.bind(this),
                    failure: function (err) {
                        deferred.reject(err);
                    }.bind(this)
                });

            } else {
                deferred.resolve(models);
            }
            return deferred.promise;
        },
        addModelData:function(name, modelData){
            var model = this.createModel(modelData);
            this.store[name] = model;
            return model
        },
        getModelRequest: function (name) {
            var request;
            request = new Sage.SData.Client.SDataSingleResourceRequest(this.service)
                     .setResourceKind(this.resourceKind)
                     .setContractName(this.contractName)
                     .setResourceSelector(string.substitute('"${0}"', [name]))
                     .setQueryArg('language', App.currentCulture != 'iv' ? App.currentCulture : '')
                     .setQueryArg('_indented', 'true');
            return request;

        },
        getModelsRequest: function (queryOptions) {
            var request;
            request = new Sage.SData.Client.SDataResourceCollectionRequest(this.service)
            request.setResourceKind(this.resourceKind);
            request.setContractName(this.contractName);
            request.setQueryArg('_indented', 'true');
            request.setQueryArg('language', App.currentCulture != 'iv' ? App.currentCulture : '');
            if ((queryOptions)&&(queryOptions.where)) {
                request.setQueryArg('where', queryOptions.where);
            }
            return request;

        },
        createModel: function (modelData) {
            var model = new this.Model({ modelData: modelData });
            model.init();
            return model;
        }
        
        
    });
});
