(function(){
  'use strict';

  angular.module('mean-template')
  .controller('GoalCtrl', ['$scope', 'Goal', function($scope, Goal){
    $scope.goals = [];
    $scope.calGoal = 0;

    $scope.create = function(){
      Goal.create($scope.calGoal).then(function(response){
        $scope.goals.push(response.data.goal);
      });
    };

    $scope.all = function(){
      Goal.all().then(function(response){
        $scope.goals = response.data.goals;
      });
    };
  }]);
})();

