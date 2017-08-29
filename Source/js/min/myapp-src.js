
angular.module('DemoModule', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/first', {
                templateUrl: "../pages/first.html"
            })
            .when('/target', {
                templateUrl: '../pages/target.html'
            })
            .when('/forms', {
                templateUrl: '../pages/forms.html'
            })
            .when('/location', {
                templateUrl: '../pages/location.html',
                controller: 'LocationCtrl'
            })
            .otherwise({
                templateUrl: '../pages/start.html'
            });
    })
    .directive('gmaps', function factory($timeout) {
        return {
            restrict: 'EA',
            template: '<div class="gmaps"></div>',
            replace: true,
            scope: {
                center: '=center',
                zoom: '=zoom'
            },
            link: function postLink(scope, iElement, iAttrs) {

                var mapOptions = {
                    zoom: scope.zoom,
                    center: new google.maps.LatLng(scope.center.lat, scope.center.lng),
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                var map = new google.maps.Map(iElement[0], mapOptions);

                scope.$watch('center', function() {
                    map.setCenter(new google.maps.LatLng(
                        parseFloat(scope.center.lat),
                        parseFloat(scope.center.lng)
                    ));
                }, true);

                scope.$watch('zoom', function() {
                    map.setZoom(parseInt(scope.zoom));
                });

                google.maps.event.addListener(map, 'center_changed', function() {
                    $timeout(function() {
                        var center = map.getCenter();
                        scope.center.lat = center.lat();
                        scope.center.lng = center.lng();
                    });
                });

                google.maps.event.addListener(map, 'zoom_changed', function() {
                    $timeout(function() {
                        scope.zoom = map.getZoom();
                    });
                });

            }
        };
    })
    .controller('DemoCtrl', function($scope) {
        $scope.message = "Target scope";
    })
    .controller('LocationCtrl', function($scope) {
        $scope.latitude = 0;
        $scope.longitude = 0;
        $scope.dataloaded = false;
        var map;
        $scope.runLocation = function() {
            if (navigator.geolocation) {
                $scope.position = navigator.geolocation.getCurrentPosition(storeLocation);
                console.log(map);
                document.getElementById("map");
            } else {
                alert("Your browser doesn't supports it!");
            }
        };

        function storeLocation(position) {
            $scope.latitude = position.coords.latitude;
            $scope.longitude = position.coords.longitude;
            $scope.dataloaded = true;
            map = new google.maps.Map(document.getElementById('map'), {
                center: {
                    lat: $scope.latitude,
                    lng: $scope.longitude
                },
                zoom: 15
            });
        }

    });