define('crm/Views/_SpeedSearchRightDrawerListMixin', ['exports', 'module', 'dojo/_base/declare', 'dojo/_base/array', 'dojo/_base/lang', 'dojo/dom-attr', './_RightDrawerBaseMixin'], function (exports, module, _dojo_baseDeclare, _dojo_baseArray, _dojo_baseLang, _dojoDomAttr, _RightDrawerBaseMixin2) {
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _declare = _interopRequireDefault(_dojo_baseDeclare);

  var _array = _interopRequireDefault(_dojo_baseArray);

  var _lang = _interopRequireDefault(_dojo_baseLang);

  var _domAttr = _interopRequireDefault(_dojoDomAttr);

  var _RightDrawerBaseMixin3 = _interopRequireDefault(_RightDrawerBaseMixin2);

  var mixinName = 'crm.Views._SpeedSearchRightDrawerListMixin';

  /**
   * @class crm.Views._SpeedSearchRightDrawerListMixin
   *
   * Speedsearch specific mixin for right drawer functionality.
   *
   * @mixins crm.Views._RightDrawerBaseMixin
   *
   */
  var __class = (0, _declare['default'])('crm.Views._SpeedSearchRightDrawerListMixin', [_RightDrawerBaseMixin3['default']], {
    // Localization
    indexSectionText: 'Indexes',

    _hasChangedIndexPrefs: false, // Dirty flag so we know when to reload the widgets

    onShow: function onShow() {
      this.setDefaultIndexPreferences();
    },
    setDefaultIndexPreferences: function setDefaultIndexPreferences() {
      if (!App.preferences.speedSeacrchIndexes) {
        var defaults = this.getDefaultIndexPrefences();
        App.preferences.speedSearchIndexes = defaults;
        App.persistPreferences();
      }
    },
    getDefaultIndexPrefences: function getDefaultIndexPrefences() {
      var defaults = [];
      var self = this;
      _array['default'].forEach(this.indexes, function setDefaults(index) {
        defaults.push({
          indexName: index.indexName,
          enabled: self._isIndexActive(index.indexName)
        });
      });
      return defaults;
    },
    setupRightDrawer: function setupRightDrawer() {
      var drawer = App.getView('right_drawer');
      if (drawer) {
        _lang['default'].mixin(drawer, this._createActions());
        drawer.setLayout(this.createRightDrawerLayout());
        drawer.getGroupForEntry = _lang['default'].hitch(this, function getGroupForRightDrawerEntry(entry) {
          return this.getGroupForRightDrawerEntry(entry);
        });

        if (this.rebuildWidgets) {
          App.snapper.on('close', _lang['default'].hitch(this, function onSnapperClose() {
            if (this._hasChangedIndexPrefs) {
              this.rebuildWidgets();
              this._hasChangedIndexPrefs = false;
            }
          }));
        }
      }
    },
    unloadRightDrawer: function unloadRightDrawer() {
      var drawer = App.getView('right_drawer');
      if (drawer) {
        drawer.setLayout([]);
        drawer.getGroupForEntry = function snapperOff() {};
        App.snapper.off('close');
      }
    },
    _onSearchExpression: function _onSearchExpression() {
      // TODO: Don't extend this private function - connect to the search widget onSearchExpression instead
      this.inherited(arguments);
    },
    _createActions: function _createActions() {
      // These actions will get mixed into the right drawer view.
      var actions = {
        indexClicked: _lang['default'].hitch(this, function onIndexClicked(params) {
          var prefs = App.preferences && App.preferences.speedSearchIndexes;

          var results = _array['default'].filter(prefs, function getResults(pref) {
            return pref.indexName === params.indexname; // the index name is lower cased.
          });
          this.activateIndex(params.indexname);
          if (results.length > 0) {
            var enabled = !!results[0].enabled;
            results[0].enabled = !enabled;
            App.persistPreferences();
            this._hasChangedIndexPrefs = true;
            _domAttr['default'].set(params.$source, 'data-enabled', (!enabled).toString());
          }
        })
      };

      return actions;
    },
    getGroupForRightDrawerEntry: function getGroupForRightDrawerEntry(entry) {
      if (entry.dataProps && entry.dataProps.indexname) {
        var mixin = _lang['default'].getObject(mixinName);
        return {
          tag: 'view',
          title: mixin.prototype.indexSectionText
        };
      }
    },
    createRightDrawerLayout: function createRightDrawerLayout() {
      var _this = this;

      var layout = [];

      var indexSection = {
        id: 'actions',
        children: []
      };
      var prefs = App.preferences && App.preferences.speedSearchIndexes;
      if (this.indexes) {
        for (var i in this.indexes) {
          if (this.indexes.hasOwnProperty(i)) {
            (function () {
              var index = _this.indexes[i];
              var indexPref = _array['default'].filter(prefs, function getIndexPref(pref) {
                // eslint-disable-line
                return pref.indexName === index.indexName;
              });
              index = _this.indexes[i];
              if (index.hasOwnProperty('indexName')) {
                indexSection.children.push({
                  'name': index.indexName,
                  'action': 'indexClicked',
                  'title': _this.indexesText[index.indexName] || index.indexName,
                  'dataProps': {
                    'indexname': index.indexName,
                    'enabled': !!indexPref[0].enabled
                  }
                });
              }
            })();
          }
        }
      }

      layout.push(indexSection);
      return layout;
    }
  });

  _lang['default'].setObject('Mobile.SalesLogix.Views._SpeedSearchRightDrawerListMixin', __class);
  module.exports = __class;
});
