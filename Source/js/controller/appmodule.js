var app = angular.module('DemoModule', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: "../../pages/first.html"
            })
            .when('/intro', {
                templateUrl: "../../pages/first.html"
            })
            .when('/javascript', {
                templateUrl: '../../pages/javascript.html'
            })
            .when('/about', {
                templateUrl: '../../pages/about.html'
            })
            .when('/forms', {
                templateUrl: '../../pages/forms.html'
            })
            .when('/history', {
                templateUrl: '../../pages/history.html'
            })
            .when('/historyFwd', {
                templateUrl: '../../pages/historyFwd.html'
            })
            .when('/touch', {
                templateUrl: '../../pages/touch.html'
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