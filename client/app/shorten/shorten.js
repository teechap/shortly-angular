angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $http, Links) {
  $scope.link = {};

  $scope.addLink = function(link){
    console.log('link', link);
    return $http({
      method: 'POST',
      url: '/api/links',
      data: {url: link}
    }).
    success(function(data, status, headers, config) {
      // We're not sure what the line immediately below does.
      $scope.link = link;
      return $scope.link;
    }).
    error(function(data, status, headers, config) {
      console.log("There has been an error", data);
      return data;
    });
  }
});
