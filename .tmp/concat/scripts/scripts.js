'use strict';

var Module = Module || {};
var Firebase = require('firebase');

$( document ).ready(function() {
    console.log('ready!');
    var ref = 'https://pcgoa-streaming.firebaseio.com/';
    Module.Firebase = new Firebase(ref);
    Module.Firebase.set('hello world! 2');
    Module.headerBuffer();

});

$( document ).scroll(function() {
  Module.zoomDetect();
});

Module.headerBuffer = function () {
	var padding = $('.header').height() + 10;
	$('.headderPadding').css('height', padding);
};

Module.zoomDetect = function () {
	var masthead = $('.header');
	var zoom = document.documentElement.clientWidth / window.innerWidth;
	if (zoom === 1) {
		masthead.addClass('sticky');
		masthead.removeClass('unsticky');
	} else {
		masthead.removeClass('sticky');
		masthead.addClass('unsticky');
	}
};
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
  .config(["$routeProvider", function ($routeProvider) {
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
  }]);


'use strict';

/**
 * @ngdoc function
 * @name spaceChartsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spaceChartsApp
 */
angular.module('spaceChartsApp')
  .controller('MainCtrl', ["$scope", function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

'use strict';

/**
 * @ngdoc function
 * @name spaceChartsApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the spaceChartsApp
 */
angular.module('spaceChartsApp')
  .controller('LoginCtrl', ["$scope", function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
