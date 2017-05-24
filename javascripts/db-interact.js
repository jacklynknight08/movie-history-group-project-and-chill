"use strict";

let $ = require("jquery"),
config = require("./APIconfig.js");

function findMovies(/*params as needed to specify search of api*/) {
	let searchParams = encodeURI($('#searchParams').val()),
		api_key = APIconfig.getAPIsettings().api_key;

	return new Promise(function(resolve, reject){
		$.ajax({
			url: `${APIconfig.getAPIsettings().databaseURL}?api_key=${api_key}&query=${searchParams}`
		}).done(function(movieData){
			resolve(movieData);
		}).fail(function(error){
			reject(error);
		});
	});
	//return Promise to find movies from api
	//resolves object of movies
}

function getWatchlist() {
	//return Promise to pull users watchlist from FB
	//resolves object of movies
}

function filterWatchlist(/*unwatched or watched on click*/) {
	//return Promise with filtered watchlist data from FB
	//resolves object of movies
}

function addToWatchlist(/*movie object from api to FB*/) {
	//return Promise that 'POSTS' object to FB
	//resolve selected movie identifier
}

function markAsWatched(/*movie identifier, watched key*/) {
	//return Promise that 'PATCH's object with watched info
	//resolve
}

function deleteFromWatchlist(/*movie identifier*/) {
	//return Promise that 'DELETE's movie object from FB
}

function rateMovie(/*movie identifier, rating key*/) {
	//return Promise that 'PATCH's object rating info
}

module.exports = {findMovies, getWatchlist, filterWatchlist, addToWatchlist, markAsWatched, deleteFromWatchlist, rateMovie};