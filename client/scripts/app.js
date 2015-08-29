 var myApp = angular.module('myApp', ['angular-mapbox']);

    myApp.controller('mapboxController', function($scope, $timeout, mapboxService) {
        mapboxService.init({accessToken: 'pk.eyJ1IjoibGljeWV1cyIsImEiOiJuZ1gtOWtjIn0.qaaGvywaJ_kCmwmlTSNyVw'});
        $timeout(function () {
            var map = mapboxService.getMapInstances()[0];
            //mapboxService.fitMapToMarkers(map);
        }, 100);

        $scope.festivals = [
            {
                name: 'Northeast Night Market',
                times: 'Tuesday, June 23 2015',
                coords: {
                    lat: 44.977753,
                    lng: -93.265011
                },
                location: 'Northeast',
                website: 'http://bauhausbrewlabs.com/blog/2015/northeast-night-market-at-the-haus'
            },
            {
                name: 'Japanese Lantern Lighting Festival',
                times: 'August 23, 2015',
                coords: {
                    lat: 44.979853,
                    lng: -93.155431
                },
                location: 'Como',
                website: 'http://www.comozooconservatory.org/attractions/gardens/japanesegarden/japanese-lantern-festival/'
            },
            {
                name: 'Powderhorn Art Fair',
                times: 'August 8, 2015',
                coords: {
                    lat: 44.939803,
                    lng: -93.253334
                },
                location: 'Powderhorn',
                website: 'http://www.powderhornartfair.com/'
            },
            {
                name: 'Basilica Block Party',
                times: 'July 10th, 2015',
                coords: {
                    lat: 44.973076,
                    lng: -93.286344
                },
                location: 'Loring Park',
                website: 'http://basilicablockparty.org/'
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

        $scope.filter = {};

        $scope.getOptionsFor = function (propName) {
            return ($scope.festivals || []).map(function (w) {
                return w[propName];
            }).filter(function (w, idx, arr) {
                return arr.indexOf(w) === idx;
            });
        };
    });

