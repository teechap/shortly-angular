angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links) {

  $scope.data = {links: []};

  $scope.getLinks = function(){
    return $http({
      method: 'GET',
      url: '/api/links'
    }).
    success(function(data, status, headers, config) {
      $scope.data.links = data;
      return $scope.data.links;
    }).
    error(function(data, status, headers, config) {
      console.log("There has been an error", data);
      return data;
    });
  }
  $scope.getLinks();
});
