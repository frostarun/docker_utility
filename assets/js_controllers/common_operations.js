myApp.commonsController = function ($scope, $http, cfpLoadingBar, $timeout) {

    $scope.containerresultPeekaPoo = function () {
        if ($scope.inspectContainerTable == true) {
            $scope.inspectContainerTable = false;
        } else if ($scope.inspectContainerTable == false) {
            $scope.inspectContainerTable = true;
        }

    };

    $scope.imageresultPeekaPoo = function () {
        if ($scope.imageSearchTable == true) {
            $scope.imageSearchTable = false;
        } else if ($scope.imageSearchTable == false) {
            $scope.imageSearchTable = true;
        }

    };

    $timeout(function () {
        console.log("Inside Timeout");
        $scope.errorMessageBox = false;
    }, 3000);

    $scope.handleOption = function () {
        $scope.optionTable = true;
    };

    $scope.start = function () {
        cfpLoadingBar.start();
    };

    $scope.complete = function () {
        cfpLoadingBar.complete();
    };
};