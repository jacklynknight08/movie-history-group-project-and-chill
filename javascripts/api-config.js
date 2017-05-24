"use strict";

let APIConfig = { //get private API access info
	apiKey: "9473502f73bd9b3ea0818fd440234fa6",
	databaseURL: "https://api.themoviedb.org"
};

let getAPIsettings = () => {
	//return APIConfig
	console.log("getAPIsettings", APIConfig);
	return APIConfig;
};

module.exports = {getAPIsettings};