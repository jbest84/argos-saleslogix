/*
 * Copyright (c) 1997-2013, SalesLogix, NA., LLC. All rights reserved.
 */
define('Mobile/SalesLogix/Views/Settings/UpdateLocale', [
    'dojo/_base/declare',
    'Sage/Platform/Mobile/Edit'
], function(
    declare,
    Edit
) {

    return declare('Mobile.SalesLogix.Views.Settings.UpdateLocale', [Edit], {
        // Localization
        titleText: 'Language',
        languageLabelText: 'language',

        id: 'settings_locale',
        resourceKind: '',
        entityName: '',
        languagesText: {
            'de': 'German',
            'en-gb': 'English (UK)',
            'en': 'English (USA)',
            'fr': 'French',
            'it': 'Italian',
            'ru': 'Russian'
        },

        createToolLayout: function() {
            return this.tools || (this.tools = {
                tbar: [{
                    id: 'save',
                    action: 'saveLocale'
                }]
            });
        },
        saveLocale: function() {
            // TODO: Save
            console.dir(this.fields['language'].getValue());
            //App.reload();
        },
        refresh: function() {
            this.inherited(arguments);
            this.setValues({
                language: {
                    $key: 'en',
                    $descriptor: this.languagesText['en']
                }
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
                        name: 'language',
                        label: this.languageLabelText,
                        type: 'select',
                        view: 'select_list',
                        valueKeyProperty: '$key',
                        valueTextProperty: '$descriptor',
                        data: this.getLanguages()
                    }
                ]
            });
            
            return this.layout;
        },
        getLanguages: function() {
            var items = [], item;

            for (item in this.languagesText) {
                if (this.languagesText.hasOwnProperty(item)) {
                    items.push({
                        $key: item,
                        $descriptor: this.languagesText[item]
                    });
                }
            }

            return { $resources: items };
        }
    });
});

