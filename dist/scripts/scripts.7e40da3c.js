"use strict";var Module=Module||{},Firebase=Firebase||{};$(document).ready(function(){console.log("ready!");var a="https://pcgoa-streaming.firebaseio.com/";Module.Firebase=new Firebase(a),Module.Firebase.set("hello world! 6"),Module.headerBuffer()}),$(document).scroll(function(){Module.zoomDetect()}),Module.loginButton=function(){var a=document.getElementsByClassName("loginBtn");console.log(a)},Module.headerBuffer=function(){var a=$(".header").height()+10;$(".headderPadding").css("height",a)},Module.zoomDetect=function(){var a=$(".header"),b=document.documentElement.clientWidth/window.innerWidth;1===b?(a.addClass("sticky"),a.removeClass("unsticky")):(a.removeClass("sticky"),a.addClass("unsticky"))},angular.module("spaceChartsApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/main",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"MainCtrl"}).when("/account",{templateUrl:"views/account.html",controller:"MainCtrl"}).when("/admin",{templateUrl:"views/admin.html",controller:"MainCtrl"}).otherwise({redirectTo:"/main"})}]);var Module=Module||{},Cookie=Cookie||{};Module.createUser=function(){console.log("create account");var a=Module.Firebase,b=document.getElementById("user_email").value,c=document.getElementById("user_pw").value;console.log(b,c),a.createUser({email:b,password:c},function(a){console.log(null===a?"User created successfully":'Error creating user:", error')})},Module.loginUser=function(){var a=Module.Firebase,b=document.getElementById("user_email").value,c=document.getElementById("user_pw").value;a.authWithPassword({email:b,password:c},function(a,b){a?console.log("Login Failed!",a):(console.log("Authenticated successfully with payload:",b),Cookie.generateName(),document.getElementById("user_email").value=""),document.getElementById("user_pw").value=""})},Module.recoverEmail=function(){console.log("Recovery Email");var a=Module.Firebase,b=document.getElementById("user_email").value;a.resetPassword({email:b},function(a){null===a?console.log("Password reset email sent successfully"):console.log("Error sending password reset email:",a)})},Module.logout=function(){console.log("logout");var a=Module.Firebase;a.unauth()};var Cookie=Cookie||{},Module=Module||{};Cookie.checkCookie=function(){"null"===Cookie.getCookie("User")||void 0===Cookie.getCookie("User")||null===Cookie.getCookie("User")?Cookie.generateName():console.log("ID already set at = "+Cookie.getCookie("User"))},Cookie.getCookie=function(a){var b=document.cookie.match("(^|;) ?"+a+"=([^;]*)(;|$)");return b?b[2]:null},Cookie.deleteCookie=function(a){document.cookie=a+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"},Cookie.generateName=function(){if(Module.authData){console.log("if");var a=Module.authData.password.email;a=a.replace(/([.*+?^${}()|\[\]\/\\])/g,""),a=a.replace(/(@)/g,"_"),a=a.replace(/(com)/g,""),Module.User="User="+a,Cookie.makeCookie("User",a)}else Module.User="No login";document.cookie=Module.User},Cookie.deleteCookie=function(a){document.cookie=a+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"},Cookie.makeCookie=function(a,b){var c=a+"="+b;document.cookie=c},angular.module("spaceChartsApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);