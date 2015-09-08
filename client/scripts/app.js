 var myApp = angular.module('myApp', ['angular-mapbox']);

 myApp.filter('unique', function() {
     return function(collection, keyname) {
         var output = [],
             keys = [];

         angular.forEach(collection, function(item) {
             var key = item[keyname];
             if(keys.indexOf(key) === -1) {
                 keys.push(key);
                 output.push(item);
             }
         });
         return output;
     };
 });

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
                month: 'June',
                description: 'Kogi biodiesel chillwave, flexitarian dreamcatcher heirloom squid forage pug post-ironic locavore fashion axe. Shabby chic direct trade +1 artisan, Shoreditch four loko seitan bicycle rights jean shorts.'
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
                month: 'August',
                description: 'Ennui chambray Neutra leggings. Lumbersexual pug migas, wolf before they sold out iPhone letterpress locavore mixtape shabby chic raw denim put a bird on it butcher.'
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
                month: 'August',
                description: 'Gluten-free wayfarers photo booth heirloom lomo, farm-to-table Shoreditch.'
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
                month: 'July',
                description: "You probably haven't heard of them vinyl authentic readymade, gluten-free street art banh mi actually. Selfies Pinterest heirloom church-key Tumblr."
            },
            {
                name: 'Uptown Art Fair',
                times: 'August 7th-9th',
                coords: {
                    lat: 44.948273,
                    lng: -93.298210
                },
                location: 'Uptown',
                website: 'http://uptownartfair.com/',
                month: 'August',
                description: "You probably haven't heard of them vinyl authentic readymade, gluten-free street art banh mi actually. Selfies Pinterest heirloom church-key Tumblr."
            },
            {
                name: 'Minnesota State Fair',
                times: 'August 27th-September 7th',
                coords: {
                    lat: 44.981117,
                    lng: -93.167630
                },
                location: 'Como',
                website: 'http://www.mnstatefair.org/',
                month: 'August',
                description: "You probably haven't heard of them vinyl authentic readymade, gluten-free street art banh mi actually. Selfies Pinterest heirloom church-key Tumblr."
            },
            {
                name: 'Art in Bloom',
                times: 'April 30th-May 3rd',
                coords: {
                    lat: 44.958170,
                    lng: -93.274113
                },
                location: 'Whittier',
                website: 'http://new.artsmia.org/art-in-bloom-2015/',
                month: 'April',
                description: "You probably haven't heard of them vinyl authentic readymade, gluten-free street art banh mi actually. Selfies Pinterest heirloom church-key Tumblr."
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

