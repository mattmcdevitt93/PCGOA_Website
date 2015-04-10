'use strict';

/**
 * @ngdoc overview
 * @name spaceChartsApp
 * @description
 * # spaceChartsApp
 *
 * Main module of the application.
 */
angular
  .module('spaceChartsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'MainCtrl'
      })
      .when('/account', {
        templateUrl: 'views/account.html',
        controller: 'MainCtrl'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/main'
      });
  });
