"use strict";
console.log("hello misss");
let $ = require('jquery');
let interact = require("./db-interact.js");



$('#submit').on("click", function(){
	interact.findMovies()
	.then(function(data){
	console.log("data", data);
	});
});

function loadAPIMoviesToDOM() {
	//just takes API searched data and loads to dom
}

function loadFBMoviesToDOM() {

}

function buildMovieObj() {
	//takes card created by converting API data to card and pushes to FB
	//also pushs rated and favorite movies to FB by adding/changing a key
}

//.add_to_watch eventListener

//search-btn eventListener (calls findMovies() and getWatchlist())


//untracked-btn eventListener (callsfindMovies() and getWatchlist() with null values)
//unwatched/watched/favs class=.search-btn

//login-btn eventListener (calls loginGoogle())

//logout-btn eventListener (calls logoutGoogle())

//stars eventListener (calls rateMovie())

