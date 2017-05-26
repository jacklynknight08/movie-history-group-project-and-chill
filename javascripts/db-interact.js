"use strict";

let $ = require("jquery"),
	config = require("./api-config.js"),
	firebase = require("./fbconfig.js"),
	_ = require("../lib/node_modules/lodash/lodash.min.js"),
	DOM = require('./dom-build.js');


$("#searchInput").keyup(function(e) {
	if (e.keyCode === 13){
		findMovies()
		.then(function(movieData){
			DOM.filterAPIObj(movieData);
		});
	}
});



function findMovies(/*params as needed to specify search of api*/) {
	let searchParams = encodeURI($('#searchInput').val()),
		api_key = config.getAPIsettings().apiKey;
		console.log("search param", searchParams);
	return new Promise(function(resolve, reject){
		$.ajax({
			url: `${config.getAPIsettings().movieSearchURL}?api_key=${api_key}&query=${searchParams}&language=en-US&page=1&include_adult=false`
		}).done(function(movieData){
			resolve(movieData);
		}).fail(function(error){
			reject(error);
		});
	});
	//return Promise to find movies from api
	//resolves object of movies
}
// URL is not finished
// function getCredits(movieId){
// 	let apiKey = config.getAPIsettings().apiKey;
// 	return new Promise(function(resolve, reject){
// 		$.ajax({
// 			url: `${config.getAPIsettings().movieSearchURL}&api_key=${api_key}${movieID}`
// 		}).done;
// 	});
// }

function getWatchlist() {
	return new Promise(function(resolve, reject){
		$.ajax({
			url: `${firebase.getFBsettings().databaseURL}/watchlist.json?orderBy="uid"&equalTo=""`
		}).done(function(watchlist){
			resolve(watchlist);
		}).fail(function(error){
			reject(error);
		});
	});
	//return Promise to pull users watchlist from FB
	//resolves object of movies
}

function filterWatchlist(valueOfFilter, watched, fav, user) {
	getWatchlist(user).then(function(watchlist){
		let array = watchlist.movies;
		_.filter(array, function(obj){
			return obj.valueOfFilter;
		});
	});
	//return Promise with filtered watchlist data from FB
	//resolves object of movies
}

function addToWatchlist(movieObj) {
	return new Promise(function(resolve, reject){
		$.ajax({
			url: `${firebase.getFBsettings().databaseURL}/watchlist.json`,
			type: "POST",
			data: JSON.stringify(movieObj),
			dataType: 'json'
		}).done(function(useless){
			resolve(useless);
		}).fail(function(error){
			reject(error);
		});
	});
	//return Promise that 'POSTS' object to FB
	//resolve selected movie identifier
}

// function markAsWatched() {
// 	//return Promise that 'PATCH's object with watched info
// 	//resolve
// }

function deleteFromWatchlist(movieID) {
	return new Promise(function(resolve, reject){
		$.ajax({
			url: `${firebase.getFBsettings().databaseURL}/watchlist/${movieID}.json`,
			method: `DELETE`
		}).done(function(stuff){
			resolve(stuff);
		}).fail(function(error){
			reject(error);
		});
	});
	//return Promise that 'DELETE's movie object from FB
}

function rateMovie(movieID, rating) {
	return new Promise(function(resolve, reject){
		$.ajax({
			url: `${firebase.getFBsettings.databaseURL}/watchlist/`
		});
	});
	//return Promise that 'PATCH's object rating info
}

module.exports = {findMovies, getWatchlist, filterWatchlist, addToWatchlist, deleteFromWatchlist, rateMovie};





