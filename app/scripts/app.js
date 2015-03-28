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
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'MaintCtrl'
      })
      .when('/login_create', {
        templateUrl: 'views/login_create.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/main'
      });
  });
