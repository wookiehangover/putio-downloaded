'use strict';

angular.module('putDownloaderApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/folder/:parentId', {
        templateUrl: 'views/folder.html',
        controller: 'FolderCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
