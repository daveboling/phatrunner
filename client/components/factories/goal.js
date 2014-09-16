(function(){
  'use strict';

  angular.module('mean-template')
  .factory('Goal', ['$http', function($http){

    function all(){
      return $http.get('goal/index');
    }

    function create(goalCal){
      return $http.post('goal/create', goalCal);
    }

    return {create:create, all:all};
  }]);
})();

