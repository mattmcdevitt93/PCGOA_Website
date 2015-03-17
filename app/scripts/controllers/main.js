'use strict';

/**
 * @ngdoc function
 * @name spaceChartsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spaceChartsApp
 */
angular.module('spaceChartsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
