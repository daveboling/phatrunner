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

    return {create:create, all:all};
  }]);
})();

