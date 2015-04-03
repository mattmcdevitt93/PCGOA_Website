'use strict';

var Module = Module || {};
var Cookie = Cookie || {};

Module.loadLogin = function () {
  document.getElementById('login');
};

Module.createUser = function () {
  console.log('create account');
  var ref = Module.Firebase;
  var username = document.getElementById('user_email').value;
  var password = document.getElementById('user_pw').value;
  ref.createUser({
    email    : username,
    password : password
  }, function(error) {
    if (error === null) {
      console.log('User created successfully');
    } else {
      console.log('Error creating user:", error');
    }
  });
};

Module.loginUser = function () {
  var ref = Module.Firebase;
  var username = document.getElementById('user_email').value;
  var password = document.getElementById('user_pw').value;
  ref.authWithPassword({
    email    : username,
    password : password
  }, function(error, authData) {
    if (error) {
      console.log('Login Failed!', error);
    } else {
      console.log('Authenticated successfully with payload:', authData);
      document.getElementById('user_email').value = '';
    }
    document.getElementById('user_pw').value = '';
  });
};

Module.recoverEmail = function () {
  console.log('Recovery Email');
  var ref = Module.Firebase;
  var username = document.getElementById('user_email').value;
  ref.resetPassword({
    email : username
  }, function(error) {
    if (error === null) {
      console.log('Password reset email sent successfully');
    } else {
      console.log('Error sending password reset email:', error);
    }
  });
};

Module.verifiedUser = function () {
  var isnum = /^\d+$/.test(Cookie.getCookie('User'));
  // console.log(isnum);
  return isnum;
};