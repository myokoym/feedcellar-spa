'use strict';

angular.module('feedcellarSpa')
  .controller('MainCtrl', function ($scope, $http) {
    //var $base_url = 'http://myokoym.net/feedcellar-demo/search.json';
    //var $base_url = 'http://localhost/search.json';
    var $base_url = 'http://localhost/feedcellar-demo/search.json';

    $scope.doSearch = function() {
        var url = $base_url + '?word=' + $scope.query;
        console.log(url);
        $http({
            method : 'GET',
            url : url
        }).success(function(data, status, headers, config) {
            console.log(status);
            $scope.feeds = angular.fromJson(data);
        }).error(function(data, status, headers, config) {
            console.log(status);
        });
    };
  });
