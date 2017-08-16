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
            .otherwise({
                templateUrl: '../../../pages/start.html'
            })
    })
    .controller('DemoCtrl', function($scope) {
        $scope.message = "Target scope";
    });