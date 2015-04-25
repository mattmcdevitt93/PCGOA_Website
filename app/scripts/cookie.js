'use strict';
var Cookie = Cookie || {};
var Module = Module || {};

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

Cookie.generateName = function() {
  // console.log(User.authData)
  // Pulls the Email address out of firebase authData and strips away the provider.
  if (Module.authData) {
    console.log('if');
    var login = Module.authData.password.email;
    login = login.replace(/([.*+?^${}()|\[\]\/\\])/g, '');
    login = login.replace(/(@)/g, '_');
    login = login.replace(/(com)/g, '');
    Module.User = 'User=' + login;
    Cookie.makeCookie('User', login);
  } else {
    Module.User = 'No login';
  }
  document.cookie = Module.User;
};

Cookie.deleteCookie = function(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

Cookie.makeCookie = function(key, token) {
  var temp = key + '=' + token;
  document.cookie = temp;
};
