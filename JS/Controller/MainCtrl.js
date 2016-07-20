angular.module("getInfo")
.controller("mainCtrl",mainCtrl);

function mainCtrl($scope,firstService){

$scope.test = firstService.data;

}// end of controller
