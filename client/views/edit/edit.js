
(function(){
  'use strict';

  angular.module('mean-template')
  .controller('EditCtrl', ['$scope', 'Edit', function($scope, Edit){
    $scope.foods = [];
    $scope.food  = {};
    $scope.runs  = [];
    $scope.run   = {};
    $scope.walks = [];
    $scope.walk  = {};

    $scope.addFood = function(){
      Edit.addFood($scope.food).then(function(response){
        $scope.foods.push(response.data.food);
        $scope.food = {};
      });
    };

    $scope.addRun = function(){
      Edit.addRun($scope.run).then(function(response){
        $scope.runs.push(response.data.run);
        $scope.run = {};
      });
    };

    $scope.addWalk = function(){
      Edit.addWalk($scope.walk).then(function(response){
        $scope.walks.push(response.data.walk);
        $scope.walk = {};
      });
    };

  }]);
})();
