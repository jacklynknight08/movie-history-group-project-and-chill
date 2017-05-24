"use strict";

let firebase = require("firebase/app"),
    fb = require("./firebase-get"),
    fbData = fb();

require("firebase/auth");
require("firebase/database");

let FBConfig = {
	//get private FB access info
	apiKey: fbData.apiKey,
	authDomain: fbData.authDomain,
	databaseURL: fbData.databaseURL
};

firebase.getFBsettings = () => {
	//return FBConfig
	console.log("getFBsettings", FBConfig);
	return FBConfig;
};

//initialize firebase config
firebase.initializeApp(FBConfig);


module.exports = {firebase};