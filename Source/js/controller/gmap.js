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