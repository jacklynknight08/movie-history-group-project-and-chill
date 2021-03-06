"use strict";

let $ = require('jquery'),
  Handlebars = require('hbsfy/runtime'),
  cardTemplate = require('../templates/movieCards.hbs'),
  movieData = require('./db-interact.js');


function makeMovieCards(movieList) {

  console.log("makeMovieCards");

  console.log("what", $("#cardContainer"));
  console.log("mMC", movieList);
  $("#cardContainer").innerHTML = movieData;

  //set up materialize columns and rows
  //calls handlebars template
  //gets result from template and appends everything to the DOM
}

function filterAPIObj(data) {
  let apiArray = data.results;
  let newMovieArray = [];
  console.log(apiArray);
  for (var i = 0; i < apiArray.length; i++) {
      let newMovieObj = new Object({});
      newMovieObj.id = apiArray[i].id;
      newMovieObj.poster_path = "https://image.tmdb.org/t/p/w500/" + apiArray[i].poster_path;
      newMovieObj.title = apiArray[i].title;
      newMovieObj.overview = apiArray[i].overview;
      newMovieObj.release_date = apiArray[i].release_date;
      // newMovieObj.actors;
  newMovieArray.push(newMovieObj);
  }
console.log("newMovieArray", newMovieArray);
  $('#movie-card-div').html(cardTemplate(newMovieArray));
}

module.exports = {makeMovieCards, filterAPIObj};
