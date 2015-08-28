 var myApp = angular.module('myApp', ['angular-mapbox']);

    myApp.controller('mapboxController', function($scope, $timeout, mapboxService) {
        mapboxService.init({accessToken: 'pk.eyJ1IjoibGljeWV1cyIsImEiOiJuZ1gtOWtjIn0.qaaGvywaJ_kCmwmlTSNyVw'});
        $timeout(function () {
            var map = mapboxService.getMapInstances()[0];
            //mapboxService.fitMapToMarkers(map);
        }, 100);

        $scope.farmersMarkets = [
            {
                name: 'Northeast Night Market',
                times: 'Tuesday, June 23, 6:00-10:00PM',
                coords: {
                    lat: 44.977753,
                    lng: -93.265011
                }
            },
            {
                name: 'Japanese Lantern Lighting Festival',
                times: 'August 23, 3:00-9:00PM',
                coords: {
                    lat: 44.979853,
                    lng: -93.155431
                }
            },
            {
                name: 'Powderhorn Art Fair',
                times: 'August 8 and 9, 10:00AM-6:00PM',
                coords: {
                    lat: 44.939803,
                    lng: -93.253334
                }
            },
            {
                name: 'Basilica Block Party',
                times: 'July 10th and 11th, 5:00-10:00PM',
                coords: {
                    lat: 44.973076,
                    lng: -93.286344
                }
            },
        ];
        $scope.mapMovedCallback = function(bounds) {
            console.log('You repositioned the map to:');
            console.log(bounds);
        };

        $scope.mapZoomedCallback = function(bounds) {
            console.log('You zoomed the map to:');
            console.log(bounds.getCenter().toString());
        };
    });

