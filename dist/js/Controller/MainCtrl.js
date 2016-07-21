"use strict";

angular.module("getInfo").controller("mainCtrl", mainCtrl);

var mainCtrl = function($scope, firstService) {

  $scope.test = firstService.data;
}; // end of controller
