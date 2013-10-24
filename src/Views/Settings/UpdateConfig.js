/*
 * Copyright (c) 1997-2013, SalesLogix, NA., LLC. All rights reserved.
 */
define('Mobile/SalesLogix/Views/Settings/UpdateConfig', [
    'dojo/_base/declare',
    'Sage/Platform/Mobile/Edit'
], function(
    declare,
    Edit
) {

    return declare('Mobile.SalesLogix.Views.Settings.UpdateConfig', [Edit], {
        // Localization
        titleText: 'Update Config',
        urlText: 'sdata url',
        enableUpdateNotificationText: 'update notices',
        multiCurrencyText: 'multicurrency',
        maxUploadFileSizeText: 'max file size',

        id: 'settings_config',
        resourceKind: '',
        entityName: '',

        createToolLayout: function() {
            return this.tools || (this.tools = {
                tbar: [{
                    id: 'save',
                    action: 'saveConfiguration'
                }]
            });
        },
        saveConfiguration: function() {
            App.preferences.configuration = {
                connections: {
                    'crm': {
                        url: this.fields['url'].getValue()
                    }
                },
                enableUpdateNotification: this.fields['enableUpdateNotification'].getValue(),
                multiCurrency: this.fields['multiCurrency'].getValue(),
                maxUploadFileSize: this.fields['maxUploadFileSize'].getValue()
            };

            App.persistPreferences();

            App.reload();
        },
        refresh: function() {
            this.inherited(arguments);

            var url = App.getService().uri.toString();

            this.setValues({
                url: url + '/',
                enableUpdateNotification: App.enableUpdateNotification,
                multiCurrency: App.multiCurrency,
                maxUploadFileSize: App.maxUploadFileSize
            }, true);
        },
        createLayout: function() {
            if (this.layout) {
                return this.layout;
            }

            this.layout = [];

            this.layout.push({
                title: '',
                children: [
                    {
                        name: 'url',
                        label: this.urlText,
                        type: 'text'
                    }, {
                        name: 'enableUpdateNotification',
                        label: this.enableUpdateNotificationText,
                        type: 'boolean'
                    }, {
                        name: 'multiCurrency',
                        label: this.multiCurrencyText,
                        type: 'boolean'
                    }, {
                        name: 'maxUploadFileSize',
                        label: this.maxUploadFileSizeText,
                        type: 'decimal',
                        precision: 0
                    }
                ]
            });
            
            return this.layout;
        }
    });
});

