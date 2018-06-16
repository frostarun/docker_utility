 var myApp = angular.module('dockerUtility', ['angular-loading-bar']);
 myApp.controller('mainCtrl', function ($scope, $http, cfpLoadingBar) {


     $scope.scanDockerHost = function () {
         var hostip = angular.element(document.getElementById("hostIP"));
         $scope.dockerhost = hostip.val();
         $scope.dockerhost = "127.0.0.1:2376";
         $scope.start();
         var docker_container_url = "http://" + $scope.dockerhost + "/containers/json?all=1";
         var docker_image_url = "http://" + $scope.dockerhost + "/images/json?all=1";
         var docker_info_url = "http://" + $scope.dockerhost + "/info";

         console.log($scope.dockerhost);

         var config = {
             headers: {
                 'Access-Control-Allow-Origin': '*'
             }
         };

         $http.get(docker_container_url, config).
         then(function (response) {
             $scope.statisticsTable = true;
             $scope.containers = response.data;
         });

         $http.get(docker_image_url, config).
         then(function (response) {
             $scope.statisticsTable = true;
             $scope.images = response.data;
         });

         $http.get(docker_info_url, config).
         then(function (response) {
             $scope.complete();
             $scope.statisticsTable = true;
             $scope.infos = response.data;
         });

     };

     $scope.inspectDockerContainer = function () {
         var containerID = angular.element(document.getElementById("containerID"));
         $scope.containerID = containerID.val();

         var hostip = angular.element(document.getElementById("inspectHostIP"));
         $scope.dockerhost = hostip.val();

         $scope.dockerhost = "127.0.0.1:2376";
         $scope.start();
         var docker_container_url = "http://" + $scope.dockerhost + "/containers/"+$scope.containerID+"/json";

         console.log($scope.containerID);
         console.log($scope.dockerhost);

         var config = {
             headers: {
                 'Access-Control-Allow-Origin': '*'
             }
         };

         $http.get(docker_container_url, config).
         then(function (response) {
             $scope.inspectContainerTable = true;
             $scope.inspectContainer = response.data;
         });
     };


     $scope.deleteDockerContainer = function () {
         var containerID = angular.element(document.getElementById("containerID"));
         $scope.containerID = containerID.val();

         var hostip = angular.element(document.getElementById("hostIP"));
         $scope.dockerhost = hostip.val();

         $scope.dockerhost = "127.0.0.1:2376";
         $scope.start();

         var docker_container_url = "http://" + $scope.dockerhost + "/containers/"+$scope.containerID+"/json";

         console.log($scope.containerID);

         var config = {
             headers: {
                 'Access-Control-Allow-Origin': '*'
             }
         };

         $http.get(docker_container_url, config).
         then(function (response) {
             $scope.statisticsTable = true;
             $scope.containers = response.data;
         });
     };

     $scope.handleOption = function () {
        $scope.optionTable = true;
    };

     $scope.start = function () {
         cfpLoadingBar.start();
     };

     $scope.complete = function () {
         cfpLoadingBar.complete();
     };
 });