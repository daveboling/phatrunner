(function(){
  'use strict';

  angular.module('mean-template')
  .factory('Edit', ['$http', function($http){

    function addFood(food, goalId){
      return $http.post('/goal/' + goalId + '/addfood', {food: food, goalId: goalId});
    }

    function addWalk(miles, goalId){
      return $http.post('/goal/' + goalId + '/addwalk', {miles:miles, goalId: goalId});
    }

    function addRun(miles, goalId){
      return $http.post('/goal/' + goalId + '/addrun', {miles:miles, goalId: goalId});
    }

    return {addFood:addFood, addWalk:addWalk, addRun:addRun};
  }]);
})();

