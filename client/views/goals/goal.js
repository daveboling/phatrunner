(function(){
  'use strict';

  angular.module('mean-template')
  .controller('GoalCtrl', ['$scope', 'Goal', function($scope, Goal){
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
      $scope.user = response.data.user;
      $scope.goals = response.data.goals;
    });

  }]);
})();

