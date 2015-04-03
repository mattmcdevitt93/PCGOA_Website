'use strict';
var Cookie = {};

Cookie.checkCookie = function() {
  if ((Cookie.getCookie('User') === 'null') || (Cookie.getCookie('User') === undefined) || (Cookie.getCookie('User') === null)) {
    Cookie.generateName(); // change this once i get the ability to pull the next name from the back end
  } else {
    console.log('ID already set at = ' + Cookie.getCookie('User'));
  }
};

Cookie.getCookie = function(key){
  var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
  return keyValue ? keyValue[2] : null;
};

Cookie.deleteCookie = function(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};