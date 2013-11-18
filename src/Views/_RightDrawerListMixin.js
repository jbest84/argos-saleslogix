/*
 * Copyright (c) 1997-2013, SalesLogix, NA., LLC. All rights reserved.
 */
define('Mobile/SalesLogix/Views/_RightDrawerListMixin', [
    'dojo/_base/declare',
    'dojo/_base/array',
    'dojo/_base/lang',
    'dojo/dom-construct',
    'dojo/dom-attr',
    'dojo/query',
    'Mobile/SalesLogix/Views/_RightDrawerBaseMixin'
], function(
    declare,
    array,
    lang,
    domConstruct,
    domAttr,
    query,
    _RightDrawerBaseMixin
) {

    return declare('Mobile.SalesLogix.Views._RightDrawerListMixin', [_RightDrawerBaseMixin], {
        //Localization
        hashTagsSectionText: 'Hash Tags',
        kpiSectionText: 'KPI',
        sortSectionText: 'Sorting',

        _hasChangedKPIPrefs: false,// Dirty flag so we know when to reload the widgets
        _hasChangedSort: false, // Dirty flag so we know when to refresh view if a re-sort has been requested

        onBeforeTransitionTo: function() {
            var drawer = App.getView('right_drawer');
            if (drawer) {
                domConstruct.place(this.searchWidget.domNode, drawer.domNode, 'first');
            }
        },
        setupRightDrawer: function() {
            var drawer = App.getView('right_drawer'), handle;
            if (drawer) {
                lang.mixin(drawer, this._createActions());
                drawer.setLayout(this.createRightDrawerLayout());
                drawer.getGroupForEntry = lang.hitch(this, function(entry) {
                    return this.getGroupForRightDrawerEntry(entry);
                });

                if (this.rebuildWidgets) {
                    App.snapper.on('close', lang.hitch(this, function() {
                        if (this._hasChangedKPIPrefs) {
                            this.destroyWidgets();
                            this.rebuildWidgets();
                            this._hasChangedKPIPrefs = false;
                        }

                        if (this._hasChangedSort) {
                            // Refresh
                            this.refreshRequired = true;
                            this.clear();
                            this.refresh();
                            this._hasChangedSort = false;
                        }
                    }));
                }
            }
        },
        unloadRightDrawer: function() {
            var drawer = App.getView('right_drawer');
            if (drawer) {
                drawer.setLayout([]);
                drawer.getGroupForEntry = function(entry) {};
                domConstruct.place(this.searchWidget.domNode, this.domNode, 'first');
                App.snapper.off('close');
            }
        },
        _onSearchExpression: function() {
            // TODO: Don't extend this private function - connect to the search widget onSearchExpression instead
            this.inherited(arguments);
            this.toggleRightDrawer();
        },
        _createActions: function() {
            // These actions will get mixed into the right drawer view.
            var actions = {
                hashTagClicked: lang.hitch(this, function(params) {
                    if (params.hashtag) {
                        this.setSearchTerm('#' + params.hashtag);
                        this.search();
                    }
                }),
                kpiClicked: lang.hitch(this, function(params) {
                    var prefs, results, enabled;
                    prefs = App.preferences && App.preferences.metrics && App.preferences.metrics[this.resourceKind];

                    results = array.filter(prefs, function(pref) {
                        return pref.title === params.title;
                    });

                    if (results.length > 0) {
                        enabled = !!results[0].enabled;
                        results[0].enabled = !enabled;
                        App.persistPreferences();
                        this._hasChangedKPIPrefs = true;

                        domAttr.set(params.$source, 'data-enabled', (!enabled).toString());
                    }
                }),
                navigateToConfigurationView: lang.hitch(this, function() {
                    var view = App.getView(this.configurationView);
                    if (view) {
                        view.resourceKind = this.resourceKind;
                        view.entityName = this.entityName;
                        view.show({ returnTo: -1 });
                        this.toggleRightDrawer();
                    }
                }),
                sortClicked: lang.hitch(this, function(params) {
                    var current;
                    current = domAttr.get(params.$source, 'data-sort');
                    this._clearSortFlagsExceptCurrent(params.field);

                    if (current === 'asc') {
                        current = 'desc';
                    } else if (current === 'desc') {
                        current = 'asc';
                    } else {
                        current = 'asc';
                    }

                    this._hasChangedSort = true;
                    this.queryOrderBy = params.field + ' ' + current;
                    console.log(this.queryOrderBy);
                    domAttr.set(params.$source, 'data-sort', current);
                })
            };

            return actions;
        },
        _clearSortFlagsExceptCurrent: function(currentName) {
            var all = query('[data-action="sortClicked"]');
            all.forEach(function(el) {
                var name = domAttr.get(el, 'data-field');
                if (name !== currentName) {
                    domAttr.set(el, 'data-sort', '');
                }
            });
        },
        getGroupForRightDrawerEntry: function(entry) {
            if (entry.dataProps && entry.dataProps.hashtag) {
                return {
                    tag: 'view',
                    title: this.hashTagsSectionText
                };
            }

            if (entry.action === 'sortClicked') {
                return {
                    tag: 'sorts',
                    title: this.sortSectionText
                };
            }

            return {
                tag: 'kpi',
                title: this.kpiSectionText
            };
        },
        createRightDrawerLayout: function() {
            var hashTagsSection, hashTag, kpiSection, layout, prefs, i, len, sortSection, sortFieldName, sortFieldDir;
            layout = [];

            hashTagsSection = {
                id: 'actions',
                children: []
            };

            if (this.searchWidget && this.searchWidget.hashTagQueries) {
                len = this.searchWidget.hashTagQueries.length;
                for (i = 0; i < len; i++) {
                    hashTag = this.searchWidget.hashTagQueries[i];
                    hashTagsSection.children.push({
                        'name': hashTag.key,
                        'action': 'hashTagClicked', 
                        'title': hashTag.tag,
                        'dataProps': {
                            'hashtag': hashTag.tag 
                        }
                    });
                }
            }

            layout.push(hashTagsSection);

            sortSection = {
                id: 'sorts',
                children: []
            };

            sortFieldName = this._getFieldFromQueryOrderBy();
            sortFieldName = sortFieldName.replace(/\//gi, '.');
            sortFieldDir = (this.queryOrderBy.toLowerCase().indexOf('desc') > -1) ? 'desc' : 'asc';

            array.forEach(this.querySelect, function(field, i) {
                /*if (field && field.indexOf('/') > -1) {
                    return;
                }*/

                var f = field.replace(/\//gi, '.'),
                    child = {
                        'name': f,
                        'action': 'sortClicked',
                        'title': f,
                        'dataProps': {
                            'field': f
                        }
                };

                if (sortFieldName === f) {
                    // ASC is default if not specified, so check for DESC
                    child.dataProps.sort = sortFieldDir;
                }
            
                sortSection.children.push(child);
            }, this);

            if (!array.some(sortSection.children, function(c) { return c.dataProps.field === sortFieldName; }, this)) {
                sortSection.children.push({
                    'name': sortFieldName,
                    'action': 'sortClicked',
                    'title': sortFieldName,
                    'dataProps': {
                        'field': sortFieldName,
                        'sort': sortFieldDir
                    }
                });
            }


            layout.push(sortSection);
 
            prefs = App.preferences && App.preferences.metrics && App.preferences.metrics[this.resourceKind];

            kpiSection = {
                id: 'kpi',
                children: []
            };

            if (prefs) {
                array.forEach(prefs, function(pref, i) {
                    if (pref.title) {
                        kpiSection.children.push({
                            'name': 'KPI' + i,
                            'action': 'kpiClicked',
                            'title': pref.title,
                            'dataProps': {
                                'title': pref.title,
                                'enabled': !!pref.enabled
                            }
                        });
                    }
                });

                layout.push(kpiSection);
            }

            return layout;
        },
        _getFieldFromQueryOrderBy: function() {
            return this.queryOrderBy.replace(/desc|asc|\s/gi, '');
        }
    });
});

