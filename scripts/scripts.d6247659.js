"use strict";var Module=Module||{},Firebase=require("firebase");$(document).ready(function(){console.log("ready!");var a="https://pcgoa-streaming.firebaseio.com/";Module.Firebase=new Firebase(a),Module.Firebase.set("hello world! 2"),Module.headerBuffer()}),$(document).scroll(function(){Module.zoomDetect()}),Module.headerBuffer=function(){var a=$(".header").height()+10;$(".headderPadding").css("height",a)},Module.zoomDetect=function(){var a=$(".header"),b=document.documentElement.clientWidth/window.innerWidth;1===b?(a.addClass("sticky"),a.removeClass("unsticky")):(a.removeClass("sticky"),a.addClass("unsticky"))},angular.module("spaceChartsApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/main",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"MainCtrl"}).when("/contact",{templateUrl:"views/contact.html",controller:"MaintCtrl"}).when("/login_create",{templateUrl:"views/login_create.html",controller:"LoginCtrl"}).otherwise({redirectTo:"/main"})}]),angular.module("spaceChartsApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("spaceChartsApp").controller("LoginCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);