 var myApp = angular.module('myApp', ['angular-loading-bar']);
 myApp.controller('myCtrl', function ($scope, $http, cfpLoadingBar) {


     $scope.scanDockerHost = function () {
         var hostip = angular.element(document.getElementById("hostIP"));
         $scope.dockerhost = hostip.val();
        //  $scope.dockerhost = "127.0.0.1:2376";
         $scope.start();
         var docker_container_url = "http://" + $scope.dockerhost + "/containers/json?all=1";
         var docker_image_url = "http://" + $scope.dockerhost + "/images/json?all=1";
         var docker_info_url = "http://" + $scope.dockerhost + "/info";

         console.log($scope.dockerhost);

         var config = {
             headers: {
                 'Access-Control-Allow-Origin': '*'
                 // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
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



     $scope.start = function () {
         cfpLoadingBar.start();
     };

     $scope.complete = function () {
         cfpLoadingBar.complete();
     };
 });