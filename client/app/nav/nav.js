angular.module('shortly.nav', [])

.controller('NavController', function ($scope, $window) {
  $scope.signedIn = function(){
    var thisToken = $window.localStorage.getItem('com.shortly') === null ? false : true;
    return thisToken;
  };

  $scope.logout = function(){
    $window.localStorage.removeItem('com.shortly');
  }
});
