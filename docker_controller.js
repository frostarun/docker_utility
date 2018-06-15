 var myApp = angular.module('myApp', []);
 myApp.controller('myCtrl', function ($scope, $http) {
     $scope.dockerhost = "127.0.0.1:2376";

     $scope.scanDockerHost = function () {
         var dockerurl = "http://" + $scope.dockerhost + "/containers/json";
         console.log(dockerurl);
         $http.get(dockerurl).
         then(function (response) {
             $scope.containers = response.data;
         });
     }
 });