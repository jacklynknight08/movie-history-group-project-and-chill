"use strict";

let $ = require("jquery"),
	config = require("./api-config.js"),
	firebase = require("./fbconfig.js"),
	_ = require("../lib/node_modules/lodash/lodash.min.js");

function findMovies(){
	let searchParams = encodeURI($('#searchParams').val()),
		apiKey = config.getAPIsettings().apiKey;

	return new Promise(function(resolve, reject){
		$.ajax({
			url: `${config.getAPIsettings().movieSearchURL}&api_key=${apiKey}&query=${searchParams}`
		}).done(function(movieData){
			resolve(movieData);
		}).fail(function(error){
			// console.log("url equals", `${config.getAPIsettings().movieSearchURL}?api_key=${apiKey}&query=${searchParams}`);
			reject(error);
		});
	});
}

function getCredits(movieID){
	let apiKey = config.getAPIsettings().apiKey;

	return new Promise(function(resolve, reject){
		$.ajax({
			url: `${config.getAPIsettings().movieSearchURL}&api_key=${apiKey}${movieID}.`//finish this URL
		}).done
	})
}

function getWatchlist(user) {
	return new Promise(function(resolve, reject){
		$.ajax({
			url: `${firebase.getFBsettings().databaseURL}/watchlist.json?orderBy="uid"&equalTo="${user}"`
		}).done(function(watchlist){
			resolve(watchlist);
		}).fail(function(error){
			reject(error);
		});
	});
	//return Promise to pull users watchlist from FB
	//resolves object of movies
}

function filterWatchlist(valueOfFilter/*unwatched,watched, or fav on click*/, user){
	//return Promise with filtered watchlist data from FB
	getWatchlist(user).then(function(watchlist){
		//filter watchlist by valueOfFilter
		let array = watchlist.movies;
		_.filter(array, function(obj){
			return obj.valueOfFilter;
		});
	});
	//resolves object of movies
}

function addToWatchlist(movieObj/*movie object from api to FB and currentUser*/) {
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

// function markAsWatched(movieID/*movie identifier, watched key*/) {
// 	//we may not need this function
// 	//return Promise that 'PATCH's object with watched info
// 	//resolve
// }

function deleteFromWatchlist(movieID/*movie identifier*/) {
	return new Promise(function(resolve, reject){
		$.ajax({
			url: `${firebase.getFBsettings().databaseURL}/watchlist/${movieID}.json`,
			method: `DELETE`
		}).done(function(){
			resolve();
		});
	});
	//return Promise that 'DELETE's movie object from FB
}

function rateMovie(movieID, rating){
	return new Promise(function(resolve, reject){
		$.ajax({
			url: `${firebase.getFBsettings.databaseURL}/watchlist/
		})
	})
	//return Promise that 'PATCH's object rating info
}

module.exports = {findMovies, getWatchlist, filterWatchlist, addToWatchlist, deleteFromWatchlist, rateMovie};



