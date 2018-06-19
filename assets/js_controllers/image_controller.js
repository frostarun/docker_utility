myApp.imageController = function ($scope, $http, cfpLoadingBar, $timeout) {
    $scope.searchDockerImage = function () {
        var imgName = angular.element(document.getElementById("imageName"));
        $scope.imageName = imgName.val();

        var hostip = angular.element(document.getElementById("hostIP"));
        $scope.dockerhost = hostip.val();

        $scope.start();
        var docker_searchImage_url = "http://" + $scope.dockerhost + "/images/search?term=" + $scope.imageName + "&limit=10";

        console.log('Containerid:' + $scope.containerid);
        console.log('dockerhost:' + $scope.dockerhost);
        console.log('docker_searchImage_url:' + docker_searchImage_url);

        var config = {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        };

        $http.get(docker_searchImage_url, config).
        then(function (response) {
            $scope.complete();
            $scope.imageSearchTable = true;
            $scope.imageSearch = response.data;
            $scope.errorMessageBox = true;
            $scope.errorContent = response.status;
            $timeout(function () {
                $scope.errorMessageBox = false;
            }, 2000);
        }, function (response) {
            $scope.errorMessageBox = true;
            $scope.errorContent = response.status;
            $timeout(function () {
                $scope.errorMessageBox = false;
            }, 2000);
        });
    };
};