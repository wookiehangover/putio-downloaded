'use strict';

angular.module('putDownloaderApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/files').success(function(files) {
      $scope.files = files;
    });
  });
