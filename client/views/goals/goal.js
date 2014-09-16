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

  }]);
})();

