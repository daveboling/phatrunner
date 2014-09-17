(function(){
  'use strict';

  angular.module('mean-template')
  .controller('GoalCtrl', ['$scope', '$rootScope', '$location', 'Goal', function($scope, $rootScope, $location, Goal){
    $scope.goals = [];
    $scope.goal  = {};
    $scope.user  = {};

    $scope.create = function(){
      Goal.create($scope.goal).then(function(response){
        $scope.goals.push(response.data.goal);
        $scope.goal = {};
      });
    };

    Goal.all().then(function(response){
      $rootScope.goalEdit = {};
      $scope.user = response.data.user;
      $scope.goals = response.data.goals;
    });

    $scope.editGoal = function(goalId){
      Goal.find(goalId).then(function(res){
        $rootScope.goalEdit = res.data.goal;
        $location.path('/edit');
      });
    };

    $scope.walkMiles = function(walks){
      return walks.reduce(function(sum, walk){ return walk.miles + sum;}, 0);
    };

    $scope.runMiles = function(runs){
      return runs.reduce(function(sum, run){ return run.miles + sum;}, 0);
    };

    $scope.intake = function(foods){
      return foods.reduce(function(sum, food){ return food.calories + sum;}, 0);
    };

    $scope.calsBurned = function(walkMiles, runMiles){
      var totalRun = ($scope.user.weight * 1) * (0.75) * runMiles,
         totalWalk = ($scope.user.weight * 1) * (0.53) * runMiles;

      return (totalRun + totalWalk) || 0;
    };

  }]);
})();

