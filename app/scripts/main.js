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