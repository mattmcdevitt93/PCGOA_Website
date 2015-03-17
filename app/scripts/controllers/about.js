'use strict';

/**
 * @ngdoc function
 * @name spaceChartsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the spaceChartsApp
 */
angular.module('spaceChartsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
