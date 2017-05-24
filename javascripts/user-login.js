"use strict";
let firebase = require("./firebaseConfig"),
    provider = new firebase.auth.GoogleAuthProvider(),
    currentUser = null;

function logInGoogle() {
	return firebase.auth().signInWithPopup(provider);
}

function logoutGoogle() {
	return firebase.auth().signOut();
}

function getUser() {
	return currentUser;
}

firebase.auth().onAuthStateChanged(function(user){
  if (user) {
    currentUser = user.uid;
  } else{
    currentUser = null;
    console.log("NO USER LOGGED IN");
  }
});

module.exports = {logInGoogle, logoutGoogle, getUser};
