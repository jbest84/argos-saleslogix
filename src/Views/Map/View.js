/*
 * Copyright (c) 1997-2014, SalesLogix, NA., LLC. All rights reserved.
 */

/**
 * @class Mobile.SalesLogix.Views.Map.View
 *
 * @extends Sage.Platform.Mobile.View
 *
 * @requires Sage.Platform.Mobile.View
 *
 */
define('Mobile/SalesLogix/Views/Map/View', [
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dojo/_base/array',
    'dojo/dom-geometry',
    'dojo/dom-attr',
    'dojo/dom-construct',
    'Sage/Platform/Mobile/View'
], function(
    declare,
    lang,
    array,
    domGeo,
    domAttr,
    domConstruct,
    View
) {
    return declare('Mobile.SalesLogix.Views.Map.View', [View] , {
        id: 'generic_map',
        titleText: '',
        expose: false,
        map: null,
        geocoder: null,
        markers: null,

        startup: function() {
            this.inherited(arguments);
            this.map = new google.maps.Map(this.contentNode);
            this.geocoder = new google.maps.Geocoder();
            this.markers = [];
        },

        attributeMap: {
            chartContent: {node: 'contentNode', type: 'innerHTML'}
        },

        widgetTemplate: new Simplate([
            '<div id="{%= $.id %}" title="{%= $.titleText %}" class="list {%= $.cls %}">',
                '<div id="map-canvas" style="width: 100%; height: 100%; margin: 0; padding: 0;" data-dojo-attach-point="contentNode"></div>',
            '</div>'
        ]),
        clearMarkers: function() {
            array.forEach(this.markers, function(marker) {
                marker.setMap(null);
            });

            this.markers = [];
        },
        showViaRoute: function () {
            this.inherited(arguments);

            var address, mapOptions, latLng, marker;
            address = this.options && this.options.address;

            this.clearMarkers();

            if (address) {
                this.geocoder.geocode({'address': address.FullAddress}, lang.hitch(this, function(results, status) {
                    if (status === google.maps.GeocoderStatus.OK) {
                        latLng = results[0].geometry.location;

                        mapOptions = {
                            center: latLng,
                            zoom: 14
                        };

                        this.map.setOptions(mapOptions);
                        marker = new google.maps.Marker({
                            position: latLng,
                            map: this.map,
                            title: 'something...'
                        });

                        this.markers.push(marker);
                    }
                }));

            } else {
                if ("geolocation" in navigator) {
                    navigator.geolocation.getCurrentPosition(lang.hitch(this, function(position) {
                        latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                        mapOptions = {
                            center: latLng,
                            zoom: 14
                        };
                        this.map.setOptions(mapOptions);
                        marker = new google.maps.Marker({
                            position: latLng,
                            map: this.map,
                            title: 'Current Location ...'
                        });
                        this.markers.push(marker);
                    }));
                }
            }
        }
    });
});
