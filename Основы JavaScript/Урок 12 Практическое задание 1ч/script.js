"use strict";

const numberOfFilm = +prompt("Сколько Вы посмотрели фильмов?", "");
console.log(numberOfFilm);

const a = prompt("Один из послдених просмотренных фильмов?", ""),
      b = prompt("Наскольо оцените его?", ""),
      c = prompt("Один из послдених просмотренных фильмов?", ""),
      d = prompt("Наскольо оцените его?", "");

const personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    generes: [],
    private: false,
};

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);




