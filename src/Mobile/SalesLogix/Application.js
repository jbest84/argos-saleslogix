/*
 * Copyright (c) 1997-2013, SalesLogix, NA., LLC. All rights reserved.
 */

/**
 * @class Mobile.SalesLogix.Application
 *
 * @extends Sage.Platform.Mobile.Application
 * @requires Sage.Platform.Mobile.ErrorManager
 * @requires Mobile.SalesLogix.Environment
 * @requires moment
 *
 */
define('Mobile/SalesLogix/Application', [
    'dojo/_base/window',
    'dojo/_base/declare',
    'dojo/_base/array',
    'dojo/_base/connect',
    'dojo/json',
    'dojo/_base/lang',
    'dojo/has',
    'dojo/string',
    'Mobile/SalesLogix/DefaultMetrics',
    'Sage/Platform/Mobile/ErrorManager',
    'Mobile/SalesLogix/Environment',
    'Sage/Platform/Mobile/Application',
    'dojo/sniff',
    'dojox/mobile/sniff',
    'moment'
], function(
    win,
    declare,
    array,
    connect,
    json,
    lang,
    has,
    string,
    DefaultMetrics,
    ErrorManager,
    environment,
    Application,
    sniff,
    mobileSniff,
    moment
) {

    return declare('Mobile.SalesLogix.Application', [Application], {
        navigationState: null,
        rememberNavigationState: true,
        enableUpdateNotification: false,
        multiCurrency: false,
        enableGroups: true,
        enableHashTags: true,
        enableOfflineSupport: true,
        speedSearch: {
            includeStemming: true,
            includePhonic: true,
            includeThesaurus: false,
            useFrequentFilter: false,
            searchType: 1
        },
        enableCaching: true,
        userDetailsQuerySelect: ['UserName', 'UserInfo/UserName', 'UserInfo/FirstName', 'UserInfo/LastName', 'DefaultOwner/OwnerDescription'],
        userOptionsToRequest: [
            'DefaultGroup;ACCOUNT',
            'DefaultGroup;CONTACT',
            'DefaultGroup;OPPORTUNITY',
            'DefaultGroup;LEAD',
            'DefaultGroup;TICKET',
            'General;InsertSecCodeID',
            'General;Currency',
            'Calendar;DayStartTime',
            'Calendar;WeekStart',
            'ActivityMeetingOptions;AlarmEnabled',
            'ActivityMeetingOptions;AlarmLead',
            'ActivityMeetingOptions;Duration',
            'ActivityPhoneOptions;AlarmEnabled',
            'ActivityPhoneOptions;AlarmLead',
            'ActivityPhoneOptions;Duration',
            'ActivityToDoOptions;AlarmEnabled',
            'ActivityToDoOptions;AlarmLead',
            'ActivityToDoOptions;Duration',
            'ActivityPersonalOptions;AlarmEnabled',
            'ActivityPersonalOptions;AlarmLead',
            'ActivityPersonalOptions;Duration'
        ],
        systemOptionsToRequest: [
            'BaseCurrency',
            'MultiCurrency',
            'ChangeOpportunityRate',
            'LockOpportunityRate'
        ],
        appName: 'argos-saleslogix',
        serverVersion: {
            'major': 8,
            'minor': 0,
            'revision': 0
        },
        mobileVersion: {
            'major': 3,
            'minor': 2,
            'revision': 0
        },
        versionInfoText: 'Mobile v${0}.${1}.${2}',
        homeViewId: 'myactivity_list',
        loginViewId: 'login',
        logOffViewId: 'logoff',

        init: function() {
            var original,
                app = this;
            if (has('ie') && has('ie') < 9) {
                window.location.href = 'unsupported.html';
            }

            this.inherited(arguments);
            this._loadNavigationState();
            this._loadPreferences();

            original = Sage.SData.Client.SDataService.prototype.executeRequest;

            Sage.SData.Client.SDataService.prototype.executeRequest = function(request, options, ajax) {
                request.setRequestHeader('X-Application-Name', app.appName);
                request.setRequestHeader('X-Application-Version', string.substitute('${major}.${minor}.${revision}', app.mobileVersion));
                original.apply(this, arguments);
            };
        },
        initConnects: function() {
            this.inherited(arguments);

            if (window.applicationCache) {
                this._connects.push(connect.connect(window.applicationCache, 'updateready', this, this._checkForUpdate));
            }
        },
        isOnFirstView: function() {
            var history, isOnFirstView = false, length, current, previous;
            history = ReUI.context.history;
            length = history.length;
            current = history[length - 1];
            previous = history[length - 2];

            if ((current && current.page === this.loginViewId) || (current && current.page === this.logOffViewId)) {
                isOnFirstView = true;
            } else if (previous && previous.page === this.loginViewId) {
                isOnFirstView = true;
            } else if (length === 1) {
                isOnFirstView = true;
            }

            return isOnFirstView;
        },
        onSetOrientation: function(value) {
            if (App.snapper) {
                App.snapper.close();
            }
        },
        _viewTransitionTo: function(view) {
            this.inherited(arguments);
            this._checkSaveNavigationState();
            if (App.snapper) {
                App.snapper.close();
            }
        },
        _checkSaveNavigationState: function() {
            if (this.rememberNavigationState !== false) {
                this._saveNavigationState();
            }
        },
        _checkForUpdate: function() {
            var applicationCache = window.applicationCache;
            if (applicationCache && this.enableUpdateNotification) {
                if (applicationCache.status === applicationCache.UPDATEREADY) {
                    this._notifyUpdateAvailable();
                }
            }
        },
        _notifyUpdateAvailable: function() {
            if (this.bars['updatebar']) {
                this.bars['updatebar'].show();
            }
        },
        _saveNavigationState: function() {
            try {
                if (window.localStorage) {
                    window.localStorage.setItem('navigationState', json.stringify(ReUI.context.history));
                }
            } catch(e) {
            }
        },
        hasMultiCurrency: function() {
            // Check if the configuration specified multiCurrency, this will override the dynamic check.
            // A configuration is not ideal, and we should refactor the edit view to process the layout when it first recieves its data,
            // instead of on startup. We cannot check App.context data that was loaded after login when the startup method is used.
            if (this.multiCurrency) {
                return true;
            }

            /*if (this.context &&
                this.context['systemOptions'] &&
                this.context['systemOptions']['MultiCurrency'] === 'True') {
                return true;
            }*/

            return false;
        },
        canLockOpportunityRate: function() {
            if (this.context &&
                this.context['systemOptions'] &&
                this.context['systemOptions']['LockOpportunityRate'] === 'True') {
                return true;
            }

            return false;
        },
        canChangeOpportunityRate: function() {
            if (this.context &&
                this.context['systemOptions'] &&
                this.context['systemOptions']['ChangeOpportunityRate'] === 'True') {
                return true;
            }

            return false;
        },
        getMyExchangeRate: function() {
            var myCode, myRate, results = {code: '', rate: 1};

            if (this.hasMultiCurrency() &&
                this.context &&
                this.context['exchangeRates'] &&
                this.context['userOptions'] &&
                this.context['userOptions']['General:Currency']) {

                myCode = this.context['userOptions']['General:Currency'];
                myRate = this.context['exchangeRates'][myCode];
                lang.mixin(results, {code: myCode, rate: myRate});
            }

            return results;
        },
        getBaseExchangeRate: function() {
            var baseCode, baseRate, convertedValue, results = {code: '', rate: 1};

            if (this.hasMultiCurrency() &&
                this.context &&
                this.context['exchangeRates'] &&
                this.context['systemOptions'] &&
                this.context['systemOptions']['BaseCurrency']) {

                baseCode = this.context['systemOptions']['BaseCurrency'];
                baseRate = this.context['exchangeRates'][baseCode];
                lang.mixin(results, {code: baseCode, rate: baseRate});
            }

            return results;
        },
        getCurrentOpportunityExchangeRate: function() {
            var rate, found, results = {code: '', rate: 1}, code;

            found = this.queryNavigationContext(function(o) {
                return (/^(opportunities)$/).test(o.resourceKind) && o.key;
            });

            found = found && found.options;

            if (found) {
                rate = found.ExchangeRate;
                code = found.ExchangeRateCode;
                lang.mixin(results, {code: code, rate: rate});
            }

            return results;
        },
        run: function() {
            this.inherited(arguments);

            if (App.isOnline() || !App.enableCaching) {
                this.handleAuthentication();
            } else {
                // todo: always navigate to home when offline? data may not be available for restored state.
                this.navigateToHomeView();
            }

            if (this.enableUpdateNotification) {
                this._checkForUpdate();
            }

        },
        onAuthenticateUserSuccess: function(credentials, callback, scope, result) {
            var user = {
                '$key': lang.trim(result['response']['userId']),
                '$descriptor': result['response']['prettyName'],
                'UserName': result['response']['userName']
            };

            this.context['user'] = user;
            this.context['roles'] = result['response']['roles'];
            this.context['securedActions'] = result['response']['securedActions'];

            if (this.context['securedActions']) {
                array.forEach(this.context['securedActions'], function(item) {
                    this[item] = true;
                }, (this.context['userSecurity'] = {}));
            } else {
                // downgrade server version as only 8.0 has `securedActions` as part of the
                // `getCurrentUser` response.
                this.serverVersion = {
                    'major': 7,
                    'minor': 5,
                    'revision': 4
                };
            }

            if (credentials.remember) {
                try {
                    if (window.localStorage) {
                        window.localStorage.setItem('credentials', Base64.encode(json.stringify({
                            username: credentials.username,
                            password: credentials.password || ''
                        })));
                    }
                } catch(e) {
                }
            }

            if (callback) {
                callback.call(scope || this, {user: user});
            }

        },
        onAuthenticateUserFailure: function(callback, scope, response, ajax) {
            var service = this.getService();
            if (service) {
                service
                    .setUserName(false)
                    .setPassword(false);
            }

            if (callback) {
                callback.call(scope || this, {response: response});
            }
        },
        authenticateUser: function(credentials, options) {
            var service = this.getService()
                .setUserName(credentials.username)
                .setPassword(credentials.password || '');

            var request = new Sage.SData.Client.SDataServiceOperationRequest(service)
                .setContractName('system')
                .setOperationName('getCurrentUser');

            request.execute({}, {
                success: lang.hitch(this, this.onAuthenticateUserSuccess, credentials, options.success, options.scope), // this.onAuthenticateUserSuccess.createDelegate(this, [credentials, options.success, options.scope], true),
                failure: lang.hitch(this, this.onAuthenticateUserFailure, options.failure, options.scope), // this.onAuthenticateUserFailure.createDelegate(this, [options.failure, options.scope], true),
                aborted: lang.hitch(this, this.onAuthenticateUserFailure, options.failure, options.scope) // this.onAuthenticateUserFailure.createDelegate(this, [options.aborted, options.scope], true)
            });
        },
        hasAccessTo: function(security) {
            if (!security) {
                return true;
            }

            var user = this.context['user'],
                userId = user && user['$key'],
                userSecurity = this.context['userSecurity'];

            if (/^ADMIN\s*/i.test(userId)) {
                return true;
            }

            if (typeof userSecurity === 'undefined') {
                return true; // running against a pre 8.0 SalesLogix environment
            }

            return !!userSecurity[security];
        },
        reload: function() {
            ReUI.disableLocationCheck();
            this.hash('');
            window.location.reload();
        },
        logOut: function() {
            this.removeCredentials();
            this._clearNavigationState();

            var service = this.getService(),
                view;
            if (service) {
                service
                    .setUserName(false)
                    .setPassword(false);
            }

            view = this.getView(this.logOffViewId);

            if (view) {
                view.show();
            }
        },
        getCredentials: function() {
            var stored, encoded, credentials;
            try {
                if (window.localStorage) {
                    stored = window.localStorage.getItem('credentials');
                    encoded = stored && Base64.decode(stored);
                    credentials = encoded && json.parse(encoded);
                }
            } catch(e) {
            }

            return credentials;
        },
        removeCredentials: function() {
            try {
                if (window.localStorage) {
                    window.localStorage.removeItem('credentials');
                }
            } catch(e) {
            }
        },
        handleAuthentication: function() {
            var credentials;

            credentials = this.getCredentials();

            if (credentials) {
                this.authenticateUser(credentials, {
                    success: function(result) {
                        this.requestUserDetails();
                        this.navigateToInitialView();
                    },
                    failure: function(result) {
                        this.navigateToLoginView();
                        this.removeCredentials();
                    },
                    aborted: function(result) {
                        this.navigateToLoginView();
                    },
                    scope: this
                });
            } else {
                this.navigateToLoginView();
            }
        },
        _clearNavigationState: function() {
            try {
                this.initialNavigationState = null;

                if (window.localStorage) {
                    window.localStorage.removeItem('navigationState');
                }
            } catch(e) {
            }
        },
        _loadNavigationState: function() {
            try {
                if (window.localStorage) {
                    this.navigationState = window.localStorage.getItem('navigationState');
                }
            } catch(e) {
            }
        },
        _loadPreferences: function() {
            try {
                if (window.localStorage) {
                    this.preferences = json.parse(window.localStorage.getItem('preferences'));
                }
            } catch(e) {
                console.error(e);
            }

            //Probably, the first time, its being accessed, or user cleared
            //the data. So lets initialize the object, with default ones.
            if (!this.preferences) {
                var views = this.getDefaultViews();

                this.preferences = {
                    home: {
                        visible: views
                    },
                    configure: {
                        order: views.slice(0)
                    }
                };
            }
        },
        getMetricsByResourceKind: function(resourceKind) {
            var prefs,
                results = [];

            prefs = this.preferences && this.preferences.metrics && this.preferences.metrics;

            if (prefs) {
                prefs = array.filter(prefs, function(item) {
                    return item.resourceKind === resourceKind;
                });

                if (prefs.length === 1) {
                    results = prefs[0].children;
                }
            }

            return results;
        },
        setDefaultMetricPreferences: function() {
            var defaults;
            if (!this.preferences.metrics) {
                defaults = new DefaultMetrics();
                this.preferences.metrics = defaults.getDefinitions();
                this.persistPreferences();
            }
        },
        requestUserDetails: function() {
            var request = new Sage.SData.Client.SDataSingleResourceRequest(this.getService())
                .setResourceKind('users')
                .setResourceSelector(string.substitute('"${0}"', [this.context['user']['$key']]))
                .setQueryArg('select', this.userDetailsQuerySelect.join(','));

            request.read({
                success: this.onRequestUserDetailsSuccess,
                failure: this.onRequestUserDetailsFailure,
                scope: this,
                async: false
            });
        },
        onRequestUserDetailsSuccess: function(entry) {
            this.context['user'] = entry;
            this.context['defaultOwner'] = entry && entry['DefaultOwner'];

            this.requestUserOptions();
            this.requestSystemOptions();
            this.setDefaultMetricPreferences();
        },
        onRequestUserDetailsFailure: function(response, o) {
        },
        requestUserOptions: function() {
            var batch = new Sage.SData.Client.SDataBatchRequest(this.getService())
                .setContractName('system')
                .setResourceKind('useroptions')
                .setQueryArg('select', 'name,value')
                .using(function() {
                    var service = this.getService();
                    array.forEach(this.userOptionsToRequest, function(item) {
                        new Sage.SData.Client.SDataSingleResourceRequest(this)
                            .setContractName('system')
                            .setResourceKind('useroptions')
                            .setResourceSelector(string.substitute('"${0}"', [item]))
                            .read();
                    }, service);
                }, this);

            batch.commit({
                success: this.onRequestUserOptionsSuccess,
                failure: this.onRequestUserOptionsFailure,
                scope: this,
                async: false
            });
        },
        onRequestUserOptionsSuccess: function(feed) {
            var userOptions = this.context['userOptions'] = this.context['userOptions'] || {};

            array.forEach(feed && feed['$resources'], function(item) {
                var key = item && item['$descriptor'],
                    value = item && item['value'];

                if (value && key) {
                    userOptions[key] = value;
                }
            });

            var insertSecCode = userOptions['General:InsertSecCodeID'],
                currentDefaultOwner = this.context['defaultOwner'] && this.context['defaultOwner']['$key'];

            if (insertSecCode && (!currentDefaultOwner || (currentDefaultOwner != insertSecCode))) {
                this.requestOwnerDescription(insertSecCode);
            }

            this.loadCustomizedMoment();
        },
        /*
         * Loads a custom object to pass into the current moment language. The object for the language gets built in buildCustomizedMoment.
         */
        loadCustomizedMoment: function() {
            var custom = this.buildCustomizedMoment(),
                currentLang;

            currentLang = moment.lang();
            moment.lang(currentLang, custom);
            this.moment = moment().lang(currentLang, custom);
        },
        /*
         * Builds an object that will get passed into moment.lang()
         */
        buildCustomizedMoment: function() {
            if (!App.context.userOptions) {
                return;
            }

            var userWeekStartDay = parseInt(App.context.userOptions['Calendar:WeekStart'], 10),
                results = {};// 0-6, Sun-Sat

            if (!isNaN(userWeekStartDay)) {
                results = {
                    week: {
                        dow: userWeekStartDay
                    }
                };
            }

            return results;
        },
        onRequestUserOptionsFailure: function(response, o) {
            ErrorManager.addError(response, o, {}, 'failure');
        },
        requestSystemOptions: function() {
            var request = new Sage.SData.Client.SDataResourceCollectionRequest(this.getService())
                .setContractName('system')
                .setResourceKind('systemoptions')
                .setQueryArg('select', 'name,value');

            request.read({
                success: this.onRequestSystemOptionsSuccess,
                failure: this.onRequestSystemOptionsFailure,
                scope: this,
                async: false
            });
        },
        onRequestSystemOptionsSuccess: function(feed) {
            // TODO: Would be nice if the systemoptions feed supported batch operations like useroptions
            var systemOptions, multiCurrency;
            systemOptions = this.context['systemOptions'] = this.context['systemOptions'] || {};

            array.forEach(feed && feed['$resources'], function(item) {
                var key = item && item['name'],
                    value = item && item['value'];

                if (value && key && array.indexOf(this.systemOptionsToRequest, key) > -1) {
                    systemOptions[key] = value;
                }
            }, this);

            multiCurrency = systemOptions['MultiCurrency'];

            if (multiCurrency && multiCurrency === 'True') {
                this.requestExchangeRates();
            }
        },
        onRequestSystemOptionsFailure: function(response, o) {
            ErrorManager.addError(response, o, {}, 'failure');
        },
        requestExchangeRates: function() {
            var request = new Sage.SData.Client.SDataResourceCollectionRequest(this.getService())
                .setContractName('dynamic')
                .setResourceKind('exchangeRates')
                .setQueryArg('select', 'Rate');

            request.read({
                success: this.onRequestExchangeRatesSuccess,
                failure: this.onRequestExchangeRatesFailure,
                scope: this,
                async: false
            });
        },
        onRequestExchangeRatesSuccess: function(feed) {
            var exchangeRates;
            exchangeRates = this.context['exchangeRates'] = this.context['exchangeRates'] || {};

            array.forEach(feed && feed['$resources'], function(item) {
                var key = item && item['$key'],
                    value = item && item['Rate'];

                if (value && key) {
                    exchangeRates[key] = value;
                }
            }, this);
        },
        onRequestExchangeRatesFailure: function(response, o) {
            ErrorManager.addError(response, o, {}, 'failure');
        },
        requestOwnerDescription: function(key) {
            var request = new Sage.SData.Client.SDataSingleResourceRequest(this.getService())
                .setResourceKind('owners')
                .setResourceSelector(string.substitute('"${0}"', [key]))
                .setQueryArg('select', 'OwnerDescription');

            request.read({
                success: this.onRequestOwnerDescriptionSuccess,
                failure: this.onRequestOwnerDescriptionFailure,
                scope: this
            });
        },
        onRequestOwnerDescriptionSuccess: function(entry) {
            if (entry) {
                this.context['defaultOwner'] = entry;
            }
        },
        onRequestOwnerDescriptionFailure: function(response, o) {
            ErrorManager.addError(response, o, {}, 'failure');
        },
        persistPreferences: function() {
            try {
                if (window.localStorage) {
                    window.localStorage.setItem('preferences', json.stringify(App.preferences));
                }
            } catch(e) {
                console.error(e);
            }
        },
        getDefaultViews: function() {
            return [
                'myactivity_list',
                'calendar_daylist',
                'history_list',
                'account_list',
                'contact_list',
                'lead_list',
                'opportunity_list',
                'ticket_list',
                'myattachment_list'
            ];
        },
        getExposedViews: function() {
            var exposed = [];

            for (var id in this.views) {
                var view = App.getView(id);

                if (view.id == 'home') {
                    continue;
                }

                if (view.expose) {
                    exposed.push(id);
                }
            }

            return exposed;
        },
        cleanRestoredHistory: function(restoredHistory) {
            var result = [],
                hasRoot = false;

            for (var i = restoredHistory.length - 1; i >= 0 && !hasRoot; i--) {
                if (restoredHistory[i].data.options && restoredHistory[i].data.options.negateHistory) {
                    result = [];
                    continue;
                }

                if (App.hasView(restoredHistory[i].page)) {
                    result.unshift(restoredHistory[i]);
                }

                hasRoot = (restoredHistory[i].page === 'home');
            }

            return hasRoot && result;
        },
        navigateToInitialView: function() {
            this.loadSnapper();

            try {
                var restoredState = this.navigationState,
                    restoredHistory = restoredState && json.parse(restoredState),
                    cleanedHistory = this.cleanRestoredHistory(restoredHistory);

                this._clearNavigationState();

                if (cleanedHistory) {
                    ReUI.context.transitioning = true;
                    ReUI.context.history = ReUI.context.history.concat(cleanedHistory.slice(0, cleanedHistory.length - 1));

                    for (var i = 0; i < cleanedHistory.length - 1; i++) {
                        window.location.hash = cleanedHistory[i].hash;
                    }

                    ReUI.context.transitioning = false;

                    var last = cleanedHistory[cleanedHistory.length - 1],
                        view = App.getView(last.page),
                        options = last.data && last.data.options;

                    view.show(options);
                } else {
                    this.navigateToHomeView();
                }
            } catch(e) {
                this._clearNavigationState();
                this.navigateToHomeView();
            }
        },
        navigateToLoginView: function() {
            var viewId = this.loginViewId, view, split;
            if (this._hasValidRedirect(this.redirectHash)) {
                // Split by "/redirectTo/"
                split = this.redirectHash.split(/\/redirectTo\//gi);
                if (split.length === 2) {
                    this.redirectHash = split[1];
                }
            } else {
                this.redirectHash = '';
            }

            view = this.getView(viewId);
            if (view) {
                view.show();
            }

        },
        _hasValidRedirect: function(redirect) {
            return this.redirectHash !== '' && this.redirectHash.indexOf('/redirectTo/') > 0;
        },
        showLeftDrawer: function() {
            var view = this.getView('left_drawer');
            if (view) {
                view.show();
            }
        },
        showRightDrawer: function() {
            var view = this.getView('right_drawer');
            if (view) {
                view.show();
            }
        },
        navigateToHomeView: function() {
            var visible, view, split, key, viewId;
            this.loadSnapper();

            visible = this.preferences && this.preferences.home && this.preferences.home.visible;
            if (visible && visible.length > 0) {
                this.homeViewId = visible[0];
            }

            // Default view will be the home view, overwritten below if a redirect hash is supplied
            view = this.getView(this.homeViewId);

            if (this.redirectHash) {
                split = this.redirectHash.split(';');
                if (split.length > 0) {
                    viewId = split[0];
                    key = split[1];
                    view = this.getView(viewId);
                    if (view) {
                        if (key) {
                            view.show({
                                key: key
                            });
                        }
                    }
                }
            }

            if (view) {
                view.show();
            }
        },
        navigateToActivityInsertView: function() {
            var view = this.getView('activity_types_list');
            if (view) {
                view.show();
            }
        },
        initiateCall: function() {
            // shortcut for environment call
            environment.initiateCall.apply(this, arguments);
        },
        initiateEmail: function() {
            // shortcut for environment call
            environment.initiateEmail.apply(this, arguments);
        },
        showMapForAddress: function() {
            // shortcut for environment call
            environment.showMapForAddress.apply(this, arguments);
        },
        getVersionInfo: function() {
            var info = string.substitute(this.versionInfoText,
                [
                    this.mobileVersion.major,
                    this.mobileVersion.minor,
                    this.mobileVersion.revision,
                    this.serverVersion.major
                ]);
            return info;
        }
    });
});
