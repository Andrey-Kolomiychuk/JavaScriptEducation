"use strict";

const numberOfFilm = prompt("Сколько Вы посмотрели фильмов?", "");
console.log(numberOfFilm);
let movie;
let actor;
let genere = [];

const personalMovieDB = {

    count: numberOfFilm,
    movies: movie,
    actors: actor,
    generes: genere,
    private: false,

};

console.log(personalMovieDB.count);
console.log(personalMovieDB.movies);
console.log(personalMovieDB.actors);
console.log(personalMovieDB.generes);
console.log(personalMovieDB.private);



