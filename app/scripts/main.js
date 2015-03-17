'use strict';
var Module = {};

$( document ).ready(function() {
    console.log( 'ready!');
    $('.page_width').append( $(window).width() + ' - ');
});

$( document ).scroll(function() {
  Module.zoomDetect();
});

$( window ).on( 'orientationchange', function() {
  console.log( 'flip' );
  Module.zoomDetect();
});


Module.zoomDetect = function () {
	var masthead = $('.header');
	var zoom = document.documentElement.clientWidth / window.innerWidth;
	console.log(zoom);
	if (zoom === 1) {
		masthead.addClass('sticky');
		masthead.removeClass('unsticky');
	} else {
		masthead.removeClass('sticky');
		masthead.addClass('unsticky');
	}
};