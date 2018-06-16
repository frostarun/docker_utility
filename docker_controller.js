 var myApp = angular.module('myApp', ['angular-loading-bar']);
 myApp
     //  .config(function (cfpLoadingBarProvider) {
     //      cfpLoadingBarProvider.includeSpinner = true;
     //  })
     .controller('myCtrl', function ($scope, $http,cfpLoadingBar) {
         $scope.dockerhost = "127.0.0.1:2376";

         $scope.scanDockerHost = function () {
             
             $scope.start();
             var dockerurl = "http://" + $scope.dockerhost + "/containers/json?all=1";
             var imageurl = "http://" + $scope.dockerhost + "/images/json?all=1";


             console.log(dockerurl);

             $http.get(dockerurl).
             then(function (response) {
                //  $scope.complete();
                 $scope.statisticsTable = true;
                 $scope.containers = response.data;
             });

             $http.get(imageurl).
             then(function (response) {
                 $scope.complete();
                 $scope.statisticsTable = true;
                 $scope.images = response.data;
             });


         };

         

         $scope.start = function () {
             cfpLoadingBar.start();
         };

         $scope.complete = function () {
             cfpLoadingBar.complete();
         }
     });