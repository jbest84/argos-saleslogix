/*
 * Copyright (c) 1997-2013, SalesLogix, NA., LLC. All rights reserved.
 */
/**
 * @class crm.Views.MetricWidget
 *
 *
 * @requires argos._Templated
 * @requires argos.Store.SData
 *
 */
define('crm/Views/MetricWidget', [
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dojo/_base/array',
    'dojo/Deferred',
    'dojo/when',
    'dojo/promise/all',
    'dojo/dom-construct',
    'dijit/_Widget',
    'argos/_Templated',
    'argos/Store/SData'
], function (declare, lang, array, Deferred, when, all, domConstruct, _Widget, _Templated, SDataStore) {
    var __class = declare('crm.Views.MetricWidget', [_Widget, _Templated], {
        /**
         * @property {Simplate}
         * Simple that defines the HTML Markup
        */
        widgetTemplate: new Simplate([
            '<div class="metric-widget">',
            '<button data-dojo-attach-event="onclick:navToReportView">',
            '<div data-dojo-attach-point="metricDetailNode" class="metric-detail">',
            '{%! $.loadingTemplate %}',
            '</div>',
            '</button>',
            '</div>'
        ]),
        /**
         * @property {Simplate}
         * HTML markup for the metric detail (name/value)
        */
        itemTemplate: new Simplate([
            '<h1 class="metric-value">{%: $$.formatter($.value) %}</h1>',
            '<span class="metric-title">{%: $$.title %}</span>'
        ]),
        /**
         * @property {Simplate}
         */
        errorTemplate: new Simplate([
            '<div class="metric-title">{%: $$.errorText %}</div>'
        ]),
        /**
         * @property {Simplate}
         * HTML markup for the loading text and icon
        */
        loadingTemplate: new Simplate([
            '<div class="metric-title list-loading">',
            '<span class="list-loading-indicator"><span class="fa fa-spinner fa-spin"></span><div>{%= $.loadingText %}</div></span>',
            '</div>'
        ]),
        // Localization
        title: '',
        loadingText: 'loading...',
        errorText: 'Error loading widget.',
        // Store Options
        querySelect: null,
        queryName: null,
        queryArgs: null,
        queryOrderBy: null,
        resourceKind: null,
        resourcePredicate: null,
        contractName: null,
        keyProperty: null,
        applicationName: null,
        position: 0,
        resultNum: 0,
        resultTotal: 0,
        pageSize: 100,
        store: null,
        _data: null,
        _dataArray: null,
        value: null,
        singleQuery: null,
        requestDataDeferred: null,
        metricDetailNode: null,
        currentSearchExpression: '',
        // Chart Properties
        chartType: null,
        chartTypeMapping: {
            'pie': 'chart_generic_pie',
            'bar': 'chart_generic_bar',
            'line': 'chart_generic_line'
        },
        // Functions can't be stored in localstorage, save the module/fn strings and load them later via AMD
        formatModule: 'crm/Format',
        formatter: 'bigNumber',
        /**
         * Loads a module/function via AMD and wraps it in a deferred
         * @return {object} Returns a deferred with the function loaded via AMD require
        */
        getFormatterFnDeferred: function () {
            if (this.formatModule && this.formatter) {
                return this._loadModuleFunction(this.formatModule, this.formatter);
            }
            // Return the default fn if aggregateModule and aggregate were not assigned
            var d = new Deferred();
            d.resolve(this.formatter);
            return d.promise;
        },
        /**
         * Calculates the value shown in the metric widget button.
         * @param {Array} data Array of data used for the metric
         * @return {int} Returns a value calculated from data (SUM/AVG/MAX/MIN/Whatever)
        */
        valueFn: function (data) {
            var total = 0;
            array.forEach(data, function (item) {
                total = total + item.value;
            }, this);
            return total;
        },
        // Functions can't be stored in localstorage, save the module/fn strings and load them later via AMD
        aggregateModule: 'crm/Aggregate',
        aggregate: null,
        /**
         * Loads a module/function via AMD and wraps it in a deferred
         * @return {object} Returns a deferred with the function loaded via AMD require
        */
        getValueFnDeferred: function () {
            if (this.aggregateModule && this.aggregate) {
                return this._loadModuleFunction(this.aggregateModule, this.aggregate);
            }
            // Return the default fn if aggregateModule and aggregate were not assigned
            var d = new Deferred();
            d.resolve(this.valueFn);
            return d.promise;
        },
        _loadModuleFunction: function (module, fn) {
            // Attempt to load the function fn from the AMD module
            var def = new Deferred();
            try {
                require([module], lang.hitch(this, function (mod) {
                    var instance;
                    // Handle if required module is a ctor else object
                    if (typeof mod === 'function') {
                        instance = new mod();
                        def.resolve(instance[fn]);
                    }
                    else {
                        def.resolve(mod[fn]);
                    }
                }));
            }
            catch (err) {
                def.reject(err);
            }
            // the promise property prevents consumer from calling resolve/reject on the Deferred while still allowing access to the value
            return def.promise;
        },
        /**
         * Requests the widget's data, value fn, format fn, and renders it's itemTemplate
        */
        requestData: function () {
            var loadFormatter, loadValueFn;
            this.inherited(arguments);
            if (this._data && this._data.length > 0) {
                return;
            }
            this._data = [];
            this._dataArray = [];
            this.resultNum = 0;
            this.requestDataDeferred = new Deferred();
            this._getData();
            loadFormatter = this.getFormatterFnDeferred(); // deferred for loading in our formatter
            loadValueFn = this.getValueFnDeferred(); // deferred for loading in value function
            all([loadValueFn, loadFormatter, this.requestDataDeferred]).then(lang.hitch(this, function (results) {
                var valueFn, formatterFn, data, value;
                if (!results[0] || !results[1] || !results[2]) {
                    throw new Error('An error occurred loading the KPI widget data.');
                }
                valueFn = results[0];
                formatterFn = results[1];
                data = results[2];
                if (typeof valueFn === 'function') {
                    this.valueFn = valueFn;
                }
                if (typeof formatterFn === 'function') {
                    this.formatter = formatterFn;
                }
                value = this.value = this.valueFn.call(this, data);
                domConstruct.place(this.itemTemplate.apply({ value: value }, this), this.metricDetailNode, 'replace');
            }), lang.hitch(this, function (err) {
                // Error
                console.error(err);
                domConstruct.place(this.errorTemplate.apply({}, this), this.metricDetailNode, 'replace');
            }));
        },
        navToReportView: function () {
            var view;
            view = App.getView(this.chartTypeMapping[this.chartType]);
            if (view) {
                view.parent = this;
                view.formatter = this.formatter;
                view.show({ returnTo: this.returnToId, currentSearchExpression: this.currentSearchExpression, title: this.title });
            }
        },
        _getData: function () {
            var store, queryOptions, queryResults;
            queryOptions = {
                count: this.pageSize,
                start: this.position
            };
            queryResults = [];
            store = this.get('store');
            array.forEach(store, function (storeInstance) {
                queryResults.push(storeInstance.query(null, queryOptions));
            }, this);
            this.resultTotal = queryResults.length;
            array.forEach(queryResults, function (result) {
                when(result, lang.hitch(this, this._onQuerySuccess, result), lang.hitch(this, this._onQueryError));
            }, this);
            all(queryResults).then(lang.hitch(this, function (results) {
                if (results.length > 1) {
                    // Is a multi-query, therefore pass the whole array of arrays as the data
                    this.requestDataDeferred.resolve(results);
                }
                else {
                    // Is a single query, therefore only pass the first array of objects
                    this.requestDataDeferred.resolve(results[0]);
                }
            }));
        },
        _onQuerySuccess: function (queryResults) {
            var total, left;
            total = queryResults.total;
            queryResults.forEach(lang.hitch(this, this._processItem));
            // Push the data to the dataArray to be used for multi-queries
            this._dataArray.push(this._data);
            this._data = [];
            this.resultNum++;
            left = -1;
            if (total > -1) {
                left = total - (this.position + this.pageSize);
            }
            if (left > 0) {
                this.position = this.position + this.pageSize;
                this._getData();
            }
        },
        _processItem: function (item) {
            this._data.push(item);
        },
        _onQueryError: function (error) {
            this.requestDataDeferred.reject(error);
        },
        createStore: function () {
            var store = [];
            // Check if queryArgs is an array and if not, make it one to force it to work with array.forEach
            if (!(this.queryArgs instanceof Array)) {
                this.queryArgs = [this.queryArgs];
            }
            array.forEach(this.queryArgs, function (value) {
                store.push(new SDataStore({
                    request: this.request,
                    service: App.services.crm,
                    resourceKind: this.resourceKind,
                    resourcePredicate: this.resourcePredicate,
                    contractName: this.contractName,
                    select: this.querySelect,
                    queryName: this.queryName,
                    queryArgs: value,
                    orderBy: this.queryOrderBy,
                    idProperty: this.keyProperty,
                    applicationName: this.applicationName,
                    scope: this
                }));
            }, this);
            return store;
        },
        _getStoreAttr: function () {
            return this.store || (this.store = this.createStore());
        }
    });
    lang.setObject('Mobile.SalesLogix.Views.MetricWidget', __class);
    return __class;
});
