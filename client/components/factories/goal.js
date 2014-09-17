(function(){
  'use strict';

  angular.module('mean-template')
  .factory('Goal', ['$http', function($http){

    function all(){
      return $http.get('/goals/index');
    }

    function create(goal){
      return $http.post('/goals/create', goal);
    }

    function find(goalId){
      return $http.get('/goal/' + goalId);
    }

    return {create:create, all:all, find: find};
  }]);
})();

