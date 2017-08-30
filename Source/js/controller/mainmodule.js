angular.module('DemoModule', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/first', {
                templateUrl: "../../pages/first.html"
            })
            .when('/target', {
                templateUrl: '../../pages/target.html'
            })
            .when('/forms', {
                templateUrl: '../../pages/forms.html'
            })
            .when('/location', {
                templateUrl: '../../pages/location.html',
                controller: 'LocationCtrl'
            })
            .when('/video', {
                templateUrl: '../../pages/video.html'
            })
            .when('/audio', {
                templateUrl: '../../pages/audio.html'
            })
            .otherwise({
                templateUrl: '../../pages/start.html'
            });
    })
    .controller('DemoCtrl', function($scope) {
        $scope.message = "Target scope";
    })
    .controller('LocationCtrl', function($scope) {
        $scope.latitude = 0;
        $scope.longitude = 0;
        $scope.zoom = 15;
        $scope.dataloaded = false;
        var map;
        $scope.renderMap = function() {
            if (navigator.geolocation) {
                $scope.position = navigator.geolocation.getCurrentPosition(storeLocation);
                console.log("inside map");
                console.log(map);
                console.log($scope.latitude);
                console.log($scope.longitude);
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
                center: new google.maps.LatLng($scope.latitude, $scope.longitude),
                zoom: $scope.zoom,
                mapTypeId: google.maps.MapTypeId.HYBRID
            });
        }
    });