'use strict';

angular.module('angular-notes')
  .controller('NavCtrl', ['User', '$scope', '$rootScope', function( User, $scope, $rootScope){
    $scope.logout =  function() {
      User.logout().then(function(response){
        delete $rootScope.email;
    })
  }
}]);
