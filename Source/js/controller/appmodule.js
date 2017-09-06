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