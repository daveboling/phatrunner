(function(){
  'use strict';

  angular.module('mean-template')
  .factory('Edit', ['$http', function($http){

    function addFood(food){
      return $http.post('goal/addFood', food);
    }

    function addWalk(miles){
      return $http.post('goal/addWalk', {miles:miles});
    }

    function addRun(miles){
      return $http.post('goal/addRun', {miles:miles});
    }

    return {addFood:addFood, addWalk:addWalk, addRun:addRun};
  }]);
})();

