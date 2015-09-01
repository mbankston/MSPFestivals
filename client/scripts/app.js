 var myApp = angular.module('myApp', ['angular-mapbox']);

    myApp.controller('mapboxController', function($scope, $timeout, mapboxService) {
        mapboxService.init({accessToken: 'pk.eyJ1IjoibWJhbmtzdG9uIiwiYSI6IjQxN2MwNTk5ZDIzNGRlNGE3YWZkMTU3OWY0NTAwMzc0In0.-xqqJd_v-EHWjqf3YlQmdg'});
        $timeout(function () {
            var map = mapboxService.getMapInstances()[0];
            //mapboxService.fitMapToMarkers(map);
        }, 100);

        $scope.festivals = [
            {
                name: 'Northeast Night Market',
                times: 'Tuesday, June 23, 6:00-10:00PM',
                coords: {
                    lat: 44.977753,
                    lng: -93.265011
                },
                location: 'Northeast',
                website: 'http://bauhausbrewlabs.com/blog/2015/northeast-night-market-at-the-haus',
                month: 'June'
            },
            {
                name: 'Japanese Lantern Lighting Festival',
                times: 'August 23, 3:00-9:00PM',
                coords: {
                    lat: 44.979853,
                    lng: -93.155431
                },
                location: 'Como',
                website: 'http://www.comozooconservatory.org/attractions/gardens/japanesegarden/japanese-lantern-festival/',
                month: 'August'
            },
            {
                name: 'Powderhorn Art Fair',
                times: 'August 8 and 9, 10:00AM-6:00PM',
                coords: {
                    lat: 44.939803,
                    lng: -93.253334
                },
                location: 'Powderhorn',
                website: 'http://www.powderhornartfair.com/',
                month: 'August'
            },
            {
                name: 'Basilica Block Party',
                times: 'July 10th and 11th, 5:00-10:00PM',
                coords: {
                    lat: 44.973076,
                    lng: -93.286344
                },
                location: 'Loring Park',
                website: 'http://basilicablockparty.org/',
                month: 'July'
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



        //$scope.addLocation = function(location){
        //    $scope.locationList.push(location);
        //};
        //
        //$scope.customArrayFilter = function(location){
        //    if(locationList.lenth==0){
        //        return true
        //    }
        //    return locationList.contains(location);
        //}

        $scope.locationList=[];

        $scope.includeLocation = function(location) {
            var i = $scope.locationList.indexOf(location);
            if (i > -1) {
                $scope.locationList.splice(i,1);
            }else {
                $scope.locationList.push(location);
            }
        };

        $scope.locationFilter = function(festivals){

            if ($scope.locationList.length > 0){
                if ($scope.locationList.indexOf(festivals.location) < 0)

                return;

            }
            return festivals
        }

        $scope.monthList=[];

        $scope.includeMonth = function(month) {
            var i = $scope.monthList.indexOf(month);
            if (i > -1) {
                $scope.monthList.splice(i,1);
            }else {
                $scope.monthList.push(month);
            }
        };

        $scope.monthFilter = function(festivals){

            if ($scope.monthList.length > 0){
                if ($scope.monthList.indexOf(festivals.month) < 0)

                    return;

            }
            return festivals
        }
    });

