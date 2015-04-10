'use strict';

var Module = Module || {};
var Cookie = Cookie || {};

Module.createUser = function () {
  console.log('create account');
  var ref = Module.Firebase;
  var username = document.getElementById('user_email').value;
  var password = document.getElementById('user_pw').value;
  console.log(username, password);
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
      Cookie.generateName();
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

Module.logout = function () {
  console.log('logout');
  var ref = Module.Firebase;
  ref.unauth();
};
