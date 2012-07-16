define('Mobile/SalesLogix/Views/QuickNav', [
    'dojo/_base/declare',
    'dojo/_base/array',
    'dojo/_base/lang',
    'dojo/dom-attr',
    'Sage/Platform/Mobile/View',
    'argos!application',
    'argos!scene',
    'argos!customizations'
], function(
    declare,
    array,
    lang,
    domAttr,
    View,
    app,
    scene,
    customizations
) {
    return declare('Mobile.SalesLogix.Views.QuickNav', [View], {
        events: {
            'click': true
        },
        baseClass: 'quick-nav',
        components: [
            {name: 'back', content: '<button class="button quick-nav-back" data-action="navigateBack"><span></span></button>'},
            {name: 'home', content: '<button class="button quick-nav-home" data-action="navigateToHomeView"><span></span></button>'}
        ],
        homeView: 'home',
        navigateBack: function() {
            scene().back();
        },
        navigateToHomeView: function() {
            scene().showView(this.homeView, {});
        }
    });
});