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
        directionsService: null,
        directionsDisplay: null,
        infoWindow: null,
        markers: null,
        listeners: null,

        startup: function() {
            this.inherited(arguments);
            this.markers = [];
            this.listeners = [];
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

            array.forEach(this.listeners, function(handle) {
                google.maps.event.removeListener(handle);
            });

            this.markers = [];
        },
        onTransitionTo: function() {
            var address, directions;

            address = this.options && this.options.address;
            directions = this.options && this.options.directions;

            this.map = new google.maps.Map(this.contentNode);
            this.geocoder = new google.maps.Geocoder();
            this.directionsService = new google.maps.DirectionsService();
            this.directionsDisplay = new google.maps.DirectionsRenderer();
            this.infoWindow = new google.maps.InfoWindow();

            this.showMap(address, directions);
        },
        onTransitionAway: function() {
            this.options.address = null;
            this.map = null;
            this.geocoder = null;
        },
        showMap: function(address, directions) {
            var mapOptions, latLng, marker;

            this.clearMarkers();

            if (address) {
                this.geocoder.geocode({'address': address.FullAddress}, function (results, status) {
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

                    if ("geolocation" in navigator && directions) {
                        // Use HTML5 geolocation to get the user's current coordinates
                        navigator.geolocation.getCurrentPosition(function(position) {
                            var start, end, request;

                            start = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                            end = address.FullAddress;

                            mapOptions = {
                                center: start,
                                zoom: 14
                            };

                            this.map.setOptions(mapOptions);

                            // Setup directions service request
                            request = {
                                origin: start,
                                destination: end,
                                travelMode: google.maps.TravelMode.DRIVING
                            };

                            this.directionsDisplay.setMap(this.map);
                            this.directionsService.route(request, function(result, status) {
                                if (status === google.maps.DirectionsStatus.OK) {
                                    this.directionsDisplay.setDirections(result);
                                    this._showSteps(result);
                                }
                            }.bind(this));

                        }.bind(this));
                    }
                }.bind(this));
            }
        },
        _showSteps: function(result) {
            var route, marker, i;
            route = result.routes[0].legs[0];

            for (i = 0; i < route.steps.length; i++) {
                marker = new google.maps.Marker({
                    position: route.steps[i].start_point,
                    map: this.map
                });

                this._showInstructions(marker, route.steps[i].instructions);
                this.markers.push(marker);// Add to marker array so it can be cleared later on
            }
        },
        _showInstructions: function(marker, text) {
            var handle = google.maps.event.addListener(marker, 'click', function() {
               this.infoWindow.setContent(text);
               this.infoWindow.open(this.map, marker);
            }.bind(this));

            this.listeners.push(handle); // Add handle to the listeners array so it can be removed later on
        }
    });
});
