'use strict';

angular.module('feedcellarSpa')
  .controller('MainCtrl', function ($scope, $http, Api) {
    //var $base_url = 'http://myokoym.net/feedcellar-demo/search.json';
    //var $base_url = 'http://localhost/search.json';
    var $base_url = 'http://localhost/feedcellar-demo/search.json';

    $scope.doSearch = function() {
      Api.search($scope.query).then(function(res) {
      var raw_feeds = angular.fromJson(res.data);
      var feeds = [];
      angular.forEach(raw_feeds, function(feed, i) {
        feeds[i] = feed._value._key;
      });
      $scope.feeds = feeds;
    })};
  });
