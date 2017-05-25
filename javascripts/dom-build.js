"use strict";

let $ = require('jquery'),
	Handlebars = require('hbsfy/runtime'),
	cardTemplate = require('../templates/movieCards.hbs');

function makeMovieCards(movieData) {
	console.log("what", $("#cardContainer"));
	console.log("mMC", movieData);
	$("#cardContainer").innerHTML = movieData;
}

module.exports = {makeMovieCards};
