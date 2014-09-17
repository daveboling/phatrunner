(function(){
  'use strict';

  angular.module('mean-template')
  .factory('Edit', ['$http', function($http){

    function addFood(food, goalId){
      return $http.post('/goal/' + goalId + '/addfood', food, {goalId: goalId});
    }

    function addWalk(walk, goalId){
      console.log('fired');
      return $http.post('/goal/' + goalId + '/addwalk', walk, {goalId: goalId});
    }

    function addRun(run, goalId){
      return $http.post('/goal/' + goalId + '/addrun', run, {goalId: goalId});
    }

    return {addFood:addFood, addWalk:addWalk, addRun:addRun};
  }]);
})();

