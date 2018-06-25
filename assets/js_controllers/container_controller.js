myApp.containerController = function ($scope, $http, cfpLoadingBar, $timeout) {
    $scope.scanDockerHost = function () {
        var hostip = angular.element(document.getElementById("hostIP"));
        $scope.dockerhost = hostip.val();
        $scope.start();
        var docker_container_url = "http://" + $scope.dockerhost + "/containers/json?all=1";
        var docker_image_url = "http://" + $scope.dockerhost + "/images/json?all=1";
        var docker_info_url = "http://" + $scope.dockerhost + "/info";

        console.log('dockerhost:' + $scope.dockerhost);
        console.log('docker_container_url:' + docker_container_url);
        console.log('docker_image_url:' + docker_image_url);
        console.log('docker_info_url:' + docker_info_url);

        var config = {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        };

        $http.get(docker_container_url, config).
        then(function (response) {
            $scope.statisticsTable = true;
            $scope.containers = response.data;
        }, function (response) {
            $scope.errorMessageBox = true;
            $scope.errorContent = response.statusText;
            $timeout(function () {
                $scope.errorMessageBox = false;
            }, 2000);
        });

        $http.get(docker_image_url, config).
        then(function (response) {
            $scope.statisticsTable = true;
            $scope.images = response.data;
        }, function (response) {
            $scope.errorMessageBox = true;
            $scope.errorContent = response.statusText;
            $timeout(function () {
                $scope.errorMessageBox = false;
            }, 2000);
        });

        $http.get(docker_info_url, config).
        then(function (response) {
            $scope.complete();
            $scope.statisticsTable = true;
            $scope.infos = response.data;
        }, function (response) {
            $scope.errorMessageBox = true;
            $scope.errorContent = response.statusText;
            $timeout(function () {
                $scope.errorMessageBox = false;
            }, 2000);
        });

    };

    $scope.inspectDockerContainer = function () {
        var contID = angular.element(document.getElementById("containerID"));
        $scope.containerid = contID.val();

        var hostip = angular.element(document.getElementById("hostIP"));
        $scope.dockerhost = hostip.val();

        $scope.start();
        var docker_inspect_url = "http://" + $scope.dockerhost + "/containers/" + $scope.containerid + "/json";

        console.log('Containerid:' + $scope.containerid);
        console.log('dockerhost:' + $scope.dockerhost);
        console.log('docker_inspect_url:' + docker_inspect_url);

        var config = {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        };

        $http.get(docker_inspect_url, config).
        then(function (response) {
            $scope.complete();
            $scope.inspectContainerTable = true;
            $scope.inspectContainer = response.data;
            $scope.errorMessageBox = true;
            $scope.errorContent = response.status +":"+response.statusText;
            $timeout(function () {
                $scope.errorMessageBox = false;
            }, 2000);
        }, function (response) {
            $scope.errorMessageBox = true;
            $scope.errorContent = response.status +":"+response.statusText;
            $timeout(function () {
                $scope.errorMessageBox = false;
            }, 2000);
        });
    };


    $scope.killDockerContainer = function () {
        var containerID = angular.element(document.getElementById("containerID"));
        $scope.containerID = containerID.val();

        var hostip = angular.element(document.getElementById("hostIP"));
        $scope.dockerhost = hostip.val();

        //  $scope.dockerhost = "127.0.0.1:2376";
        $scope.start();

        var docker_kill_url = "http://" + $scope.dockerhost + "/containers/" + $scope.containerID + "/kill";

        console.log('Containerid:' + $scope.containerid);
        console.log('dockerhost:' + $scope.dockerhost);
        console.log('docker_kill_url:' + docker_kill_url);

        $http({
            url: docker_kill_url,
            method: "POST",
            //  data: {
            //      "message": "Container was destroyed!"
            //  }
        }).
        then(function (response) {
            $scope.complete();
            $scope.errorMessageBox = true;
            $scope.errorContent = response.status +":"+response.statusText;
            $timeout(function () {
                $scope.errorMessageBox = false;
            }, 2000);
        }, function (response) {
            console.log(response.status);
            $scope.errorMessageBox = true;
            $scope.errorContent = response.status +":"+response.statusText;
            $timeout(function () {
                $scope.errorMessageBox = false;
            }, 2000);
        });
    };

    $scope.startDockerContainer = function () {
        var containerID = angular.element(document.getElementById("containerID"));
        $scope.containerID = containerID.val();

        var hostip = angular.element(document.getElementById("hostIP"));
        $scope.dockerhost = hostip.val();

        //  $scope.dockerhost = "127.0.0.1:2376";
        $scope.start();

        var docker_start_url = "http://" + $scope.dockerhost + "/containers/" + $scope.containerID + "/start";

        console.log('Containerid:' + $scope.containerid);
        console.log('dockerhost:' + $scope.dockerhost);
        console.log('docker_start_url:' + docker_start_url);

        $http({
            url: docker_start_url,
            method: "POST",
            //  data: {
            //      "message": "Container was destroyed!"
            //  }
        }).
        then(function (response) {
            $scope.complete();
            $scope.errorMessageBox = true;
            $scope.errorContent = response.status +":"+response.statusText;
            $timeout(function () {
                $scope.errorMessageBox = false;
            }, 2000);
        }, function (response) {
            console.log(response.status);
            $scope.errorMessageBox = true;
            $scope.errorContent = response.status +":"+response.statusText;
            $timeout(function () {
                $scope.errorMessageBox = false;
            }, 2000);
        });
    };


    $scope.stopDockerContainer = function () {
        var containerID = angular.element(document.getElementById("containerID"));
        $scope.containerID = containerID.val();

        var hostip = angular.element(document.getElementById("hostIP"));
        $scope.dockerhost = hostip.val();

        //  $scope.dockerhost = "127.0.0.1:2376";
        $scope.start();

        var docker_stop_url = "http://" + $scope.dockerhost + "/containers/" + $scope.containerID + "/stop";

        console.log('Containerid:' + $scope.containerid);
        console.log('dockerhost:' + $scope.dockerhost);
        console.log('docker_stop_url:' + docker_stop_url);

        $http({
            url: docker_stop_url,
            method: "POST",
            //  data: {
            //      "message": "Container was destroyed!"
            //  }
        }).
        then(function (response) {
            $scope.complete();
            $scope.errorMessageBox = true;
            $scope.errorContent = response.status +":"+response.statusText;
            $timeout(function () {
                $scope.errorMessageBox = false;
            }, 2000);
        }, function (response) {
            console.log(response.status);
            $scope.errorMessageBox = true;
            $scope.errorContent = response.status +":"+response.statusText;
            $timeout(function () {
                $scope.errorMessageBox = false;
            }, 2000);
        });
    };


    $scope.pauseDockerContainer = function () {
        var containerID = angular.element(document.getElementById("containerID"));
        $scope.containerID = containerID.val();

        var hostip = angular.element(document.getElementById("hostIP"));
        $scope.dockerhost = hostip.val();

        //  $scope.dockerhost = "127.0.0.1:2376";
        $scope.start();

        var docker_pause_url = "http://" + $scope.dockerhost + "/containers/" + $scope.containerID + "/pause";

        console.log('Containerid:' + $scope.containerid);
        console.log('dockerhost:' + $scope.dockerhost);
        console.log('docker_pause_url:' + docker_pause_url);

        $http({
            url: docker_pause_url,
            method: "POST",
            //  data: {
            //      "message": "Container was destroyed!"
            //  }
        }).
        then(function (response) {
            $scope.complete();
            $scope.errorMessageBox = true;
            $scope.errorContent = response.status +":"+response.statusText;
            $timeout(function () {
                $scope.errorMessageBox = false;
            }, 2000);
        }, function (response) {
            console.log(response.status);
            $scope.errorMessageBox = true;
            $scope.errorContent = response.status +":"+response.statusText;
            $timeout(function () {
                $scope.errorMessageBox = false;
            }, 2000);
        });
    };


    $scope.unpauseDockerContainer = function () {
        var containerID = angular.element(document.getElementById("containerID"));
        $scope.containerID = containerID.val();

        var hostip = angular.element(document.getElementById("hostIP"));
        $scope.dockerhost = hostip.val();

        //  $scope.dockerhost = "127.0.0.1:2376";
        $scope.start();

        var docker_unpause_url = "http://" + $scope.dockerhost + "/containers/" + $scope.containerID + "/unpause";

        console.log('Containerid:' + $scope.containerid);
        console.log('dockerhost:' + $scope.dockerhost);
        console.log('docker_unpause_url:' + docker_unpause_url);

        $http({
            url: docker_unpause_url,
            method: "POST",
            //  data: {
            //      "message": "Container was destroyed!"
            //  }
        }).
        then(function (response) {
            $scope.complete();
            $scope.errorMessageBox = true;
            $scope.errorContent = response.status +":"+response.statusText;
            $timeout(function () {
                $scope.errorMessageBox = false;
            }, 2000);
        }, function (response) {
            console.log(response.status);
            $scope.errorMessageBox = true;
            $scope.errorContent = response.status +":"+response.statusText;
            $timeout(function () {
                $scope.errorMessageBox = false;
            }, 2000);
        });
    };

    $scope.deleteDockerContainer = function () {
        var containerID = angular.element(document.getElementById("containerID"));
        $scope.containerID = containerID.val();

        var hostip = angular.element(document.getElementById("hostIP"));
        $scope.dockerhost = hostip.val();

        //  $scope.dockerhost = "127.0.0.1:2376";
        $scope.start();

        var docker_delete_url = "http://" + $scope.dockerhost + "/containers/" + $scope.containerID;

        console.log('Containerid:' + $scope.containerID);
        console.log('dockerhost:' + $scope.dockerhost);
        console.log('docker_delete_url:' + docker_delete_url);

        $http({
            url: docker_delete_url,
            method: "DELETE",
            //  data: {
            //      "message": "Container was destroyed!"
            //  }
        }).
        then(function (response) {
            $scope.complete();
            $scope.errorMessageBox = true;
            $scope.errorContent = response.status +":"+response.statusText;
            $timeout(function () {
                $scope.errorMessageBox = false;
            }, 2000);
        }, function (response) {
            console.log(response.status);
            $scope.errorMessageBox = true;
            $scope.errorContent = response.status +":"+response.statusText;
            $timeout(function () {
                $scope.errorMessageBox = false;
            }, 2000);
        });
    };
};