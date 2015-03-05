'use strict';

angular.module('angular-notes')
  .factory('Note', ['$http', function($http){

    function create(note){
      return $http.post('/create', note);
    }

    function find(){
      return $http.get('/find');
    }

    return {create:create, find:find};

  }]);
