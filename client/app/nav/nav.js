angular.module('shortly.nav', [])

.controller('NavController', function ($scope, $location) {
  $scope.isActive = function(route){
    $scope.path = $location.path();
    return $location.path() === route;
  };
});
