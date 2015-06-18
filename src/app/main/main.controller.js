'use strict';

angular.module('feedcellarSpa')
  .controller('MainCtrl', function ($scope, $http, Api) {
    //var $base_url = 'http://myokoym.net/feedcellar-demo/search.json';
    //var $base_url = 'http://localhost/search.json';
    var $base_url = 'http://localhost/feedcellar-demo/search.json';

    $scope.doSearch = function() {
      Api.search($scope.query).then(function(res) {
      $scope.feeds = angular.fromJson(res.data);
    })};
  });
