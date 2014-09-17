
(function(){
  'use strict';

  angular.module('mean-template')
  .controller('EditCtrl', ['$scope','$rootScope', '$location', 'Edit', function($scope, $rootScope, $location, Edit){

    function checkRoot(){
      //I know what you're thinking. Super sloppy. You'd be right.
      //It's just for learning purposes. Normally, I would make a NodeJS
      //route for this, but I wanted to use Angular instead. So NYAAAA!
      if(!$rootScope.goalEdit){
        $location.path('/goals');
      }
    }

    //check to see if user has refreshed the page and cleared root.
    checkRoot();


    $scope.foods = [];
    $scope.food  = {};
    $scope.runs  = [];
    $scope.run   = {};
    $scope.walks = [];
    $scope.walk  = {};

    $scope.addFood = function(){
      Edit.addFood($scope.food, $rootScope.goalEdit._id).then(function(response){
        $scope.foods.push(response.data.food);
        $scope.food = {};
      });
    };

    $scope.addRun = function(){
      Edit.addRun($scope.run, $rootScope.goalEdit._id).then(function(response){
        $scope.runs.push(response.data.run);
        $scope.run = {};
      });
    };

    $scope.addWalk = function(){
      Edit.addWalk($scope.walk, $rootScope.goalEdit._id).then(function(response){
        $scope.walks.push(response.data.walk);
        $scope.walk = {};
      });
    };

  }]);
})();
