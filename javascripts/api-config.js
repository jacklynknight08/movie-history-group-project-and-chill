"use strict";

let APIConfig = { //get private API access info
	apiKey: "9473502f73bd9b3ea0818fd440234fa6",
	movieSearchURL: "https://api.themoviedb.org/3/search/movie",
	getActorsURL: "https://api.themoviedb.org/3/movie/"
};

let getAPIsettings = () => {
	//return APIConfig
	console.log("getAPIsettings", APIConfig);
	return APIConfig;
};

module.exports = {getAPIsettings};