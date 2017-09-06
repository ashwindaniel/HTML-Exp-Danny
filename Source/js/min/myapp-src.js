var app = angular.module('DemoModule', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: "../../pages/first.html"
            })
            .when('/intro', {
                templateUrl: "../../pages/first.html"
            })
            .when('/target', {
                templateUrl: '../../pages/target.html'
            })
            .when('/about', {
                templateUrl: '../../pages/about.html'
            })
            .when('/forms', {
                templateUrl: '../../pages/forms.html'
            })
            .when('/basic', {
                templateUrl: '../../pages/BasicTraining.html'
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
            .when('/dragdropedit', {
                templateUrl: '../../pages/dragdropedit.html'
            })
            .otherwise({
                templateUrl: '../../pages/default.html'
            });
    })
    .controller('DemoCtrl', function ($scope) {
        $scope.message = "Target scope";
    });
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
    app.controller('LocationCtrl', function ($scope) {
        $scope.latitude = 0;
        $scope.longitude = 0;
        $scope.zoom = 15;
        $scope.dataloaded = false;
        $scope.map = null;
        $scope.renderMap = function () {
            $scope.dataloaded = true;
            if (navigator.geolocation) {
                $scope.position = navigator.geolocation.getCurrentPosition(storeLocation);
                console.log("inside map");
                // document.getElementById("map");
            } else {
                alert("Your browser doesn't supports it!");
            }
        };

        function storeLocation(position) {
            $scope.latitude = position.coords.latitude;
            $scope.longitude = position.coords.longitude;
            $scope.reloadMap();
            // console.log("inside store location");
        }
        $scope.reloadMap = function () {
            $scope.map = new google.maps.Map(document.getElementById('map'), {
                center: new google.maps.LatLng($scope.latitude, $scope.longitude),
                zoom: $scope.zoom,
                mapTypeId: google.maps.MapTypeId.HYBRID
            });
            console.log($scope.map.center);
        };
    });