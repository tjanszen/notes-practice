'use strict';

angular.module('angular-notes')
  .controller('NotesCtrl', [ '$scope', '$rootScope', '$state', 'Note', function($scope, $rootScope, $state, Note){
    $scope.temp = [];
    $scope.note = {urls:[]};

    $scope.add = function() {
      $scope.temp.push(null);
    };

    $scope.submit = function(note){
      Note.create(note).then(function(response){
        $rootScope.note = response.data.note;
        $state.go('notes.list');
      }, function(){
        alert('Err Err Err');
      });
    };
}]);
