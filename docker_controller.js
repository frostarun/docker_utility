 var myApp = angular.module('dockerUtility', ['angular-loading-bar']);
 myApp.controller('mainCtrl', function ($scope, $http, cfpLoadingBar, $timeout) {
     myApp.containerController($scope, $http, cfpLoadingBar, $timeout);
     myApp.imageController($scope, $http, cfpLoadingBar, $timeout);
     myApp.commonsController($scope, $http, cfpLoadingBar, $timeout);
 });