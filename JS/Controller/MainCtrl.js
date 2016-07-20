angular.module("getInfo")
.controller("mainCtrl",mainCtrl);

function mainCtrl($scope,firstService){

$scope.test = firstService.getData();

}// end of controller
