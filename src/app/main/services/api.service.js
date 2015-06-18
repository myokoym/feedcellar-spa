'use strict';

angular.module('feedcellarSpa')
  .factory('Api', function ($http) {
    var $base_url = 'http://myokoym.net/feedcellar-demo/search.json';
    //var $base_url = 'http://localhost/search.json';
    //var $base_url = 'http://localhost/feedcellar-demo/search.json';

    return {
      search: function(query) {
        var url = $base_url + '?word=' + query;
        return $http({
              method : 'GET',
              url : url
          }).success(function(data, status, headers, config) {
              console.log(status);
              //$scope.feeds = angular.fromJson(data);
          }).error(function(data, status, headers, config) {
              console.log(status);
          });
      }
    };
  });

