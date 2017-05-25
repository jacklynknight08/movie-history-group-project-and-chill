"use strict";
console.log("main.js");

let $ = require('jquery'),
	interact = require('./db-interact.js'),
	buildDom = require('./dom-build.js'),
	template = require('../templates/movieCards.hbs');

	$("#submit").on("click", function(){
		interact.findMovies()
		.then(function(data){
		console.log("data", data);
		buildDom.filterAPIObj(data);

		});
	});


function loadAPIMoviesToDOM() {
	console.log("loading movies");
	//buildDom.makeMovieCards(movieData.results);
	//just takes API searched data and loads to dom
}

function loadFBMoviesToDOM() {

}

function buildMovieObj(event) {
	//takes card created by converting API data to card and pushes to FB
	//also pushs rated and favorite movies to FB by adding/changing a key
	let movieObj = {"id": $(event.target).data("movie-id")};
	return movieObj;
}

//.add_to_watch eventListener


$("#showContainer").on("click", function (){
	console.log(event.target);
});


//.add_to_watch eventListener

// Use this when the click isn't on the page yet

$(document).on("click", "#add-button", function(event){
	console.log("clicked add");
	interact.addToWatchlist(buildMovieObj(event));
});







//search-btn eventListener (calls findMovies() and getWatchlist())


//untracked-btn eventListener (callsfindMovies() and getWatchlist() with null values)
//unwatched/watched/favs class=.search-btn

//login-btn eventListener (calls loginGoogle())

//logout-btn eventListener (calls logoutGoogle())

//stars eventListener (calls rateMovie())

