
(function(){
  'use strict';

  angular.module('mean-template')
  .controller('EditCtrl', ['$scope', 'Edit', 'Food', 'Run', 'Walk', function($scope, Edit, Food, Run, Walk){
    $scope.foods = [];
    $scope.food  = {};
    $scope.runs  = [];
    $scope.run   = {};
    $scope.walks = [];
    $scope.walk  = {};

    $scope.addFood = function(){
      Food.create($scope.food).then(function(response){
        $scope.foods.push(response.data.food);
        $scope.food = {};
      });
    };

    $scope.addRun = function(){
      Run.create($scope.run).then(function(response){
        $scope.runs.push(response.data.run);
        $scope.run = {};
      });
    };

    $scope.addWalk = function(){
      Walk.create($scope.walk).then(function(response){
        $scope.walks.push(response.data.walk);
        $scope.walk = {};
      });
    };
  }]);
})();
