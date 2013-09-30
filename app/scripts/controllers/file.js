
'use strict';

angular.module('putDownloaderApp')
  .controller('FileCtrl', function ($scope, $http, $routeParams) {
    $http.get('/api/files?parent_id='+ $routeParams.parentId).success(function(files) {
      $scope.files = files;
    });
  });
