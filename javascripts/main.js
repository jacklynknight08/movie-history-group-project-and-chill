"use strict";
console.log("main.js");

let $ = require('jquery'),
	interact = require('./db-interact.js'),
	buildDom = require('./dom-build.js'),
	user = require('./user-login.js'),
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
	console.log($(event.currentTarget.id));
	//takes card created by converting API data to card and pushes to FB
	//also pushs rated and favorite movies to FB by adding/changing a key
	let movieObj = {"id": $(event.currentTarget).data("movie-id"),
					"title": $(event.currentTarget).data("movie-title"),
					"overview": $(event.currentTarget).data("movie-overview"),
					"release_date": $(event.currentTarget).data("movie-release_date"),
					"poster_path": $(event.currentTarget).data("movie-poster_path"),
					"uid": user.getUser()
					};
	console.log($(event.currentTarget).data("movie-id"));
	return movieObj;
}

//.add_to_watch eventListener


$("#showContainer").on("click", function (){
	console.log(event.target);
});


//.add_to_watch eventListener

// Use this when the click isn't on the page yet

$(document).on("click", ".add-button", function(event){
	console.log("clicked add");
	interact.addToWatchlist(buildMovieObj(event));
});

$(document).on("click", ".delete-button", function(event){
	console.log("clicked delete button");
	let movieID = $(this).data("delete-id");
	console.log(movieID);
	interact.deleteFromWatchlist(movieID);
});

//search-btn eventListener (calls findMovies() and getWatchlist())


//untracked-btn eventListener (callsfindMovies() and getWatchlist() with null values)
//unwatched/watched/favs class=.search-btn

$("#unwatchedMoviesButton").click(function(event){
	let userID = user.getUser();
	console.log("is this a userID", userID);
	interact.getWatchlist(userID)
	.then((data) => {
		console.log("what is this?", data);
		displayWatchlist(data);
	});
});

function displayWatchlist(data){
	$("#movie-card-div").html(template(data));
}

//login-btn eventListener (calls loginGoogle())

//logout-btn eventListener (calls logoutGoogle())

//stars eventListener (calls rateMovie())


$("#loginButton").click(function(){
  console.log("clicked on auth-btn");
  user.logInGoogle()
  .then(function(result){
    console.log("result from Login", result.user.uid);
    user.setUser(result.user.uid);
    loadAPIMoviesToDOM();
  });
});


$("#logoutButton").click(function(){
  user.logoutGoogle();
});