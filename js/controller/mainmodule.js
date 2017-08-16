angular.module('DemoModule', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/first', {
                templateUrl: "../../pages/first.html"
            })
            .when('/target', {
                templateUrl: '../../../pages/target.html'
            })
            .when('/forms', {
                templateUrl: '../../../pages/forms.html'
            })
            .when('/location', {
                templateUrl: '../../../pages/location.html',
                controller: 'LocationCtrl'
            })
            .otherwise({
                templateUrl: '../../../pages/start.html'
            })
    })
    .controller('DemoCtrl', function($scope) {
        $scope.message = "Target scope";
    })
    .controller('LocationCtrl', function($scope) {
        $scope.latitude = 0;
        $scope.longitude = 0;
        $scope.dataloaded = false;
        $scope.runLocation = function() {
            if (navigator.geolocation) {
                $scope.position = navigator.geolocation.getCurrentPosition(storeLocation);
            } else {
                alert("Your browser doesn't supports it!");
            }
        };

        function storeLocation(position) {
            $scope.latitude = position.coords.latitude;
            $scope.longitude = position.coords.longitude;
            $scope.dataloaded = true;
        }


    });