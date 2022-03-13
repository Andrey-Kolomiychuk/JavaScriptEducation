/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

const numberOfFilm = +prompt("Сколько Вы посмотрели фильмов?", "");
console.log(numberOfFilm);



// const a = prompt("Один из послдених просмотренных фильмов?", ""),
//       b = prompt("Наскольо оцените его?", ""),
//       c = prompt("Один из послдених просмотренных фильмов?", ""),
//       d = prompt("Наскольо оцените его?", "");

const personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    generes: [],
    private: false,
};

for (let i = 1; i <= 2; i++){
    const   a = prompt("Один из послдених просмотренных фильмов?", ""),
            b = prompt("Наскольо оцените его?", "");
                if (a != null && b != null && a != "" && b != "" && a.length < 50 && b.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log("Done");
            } else {
                console.log("Error");
                --i;
            }          
} 

// switch (personalMovieDB.count){
//     case personalMovieDB.count < 10 : 
//         console.log("Просмотрено довольно мало фильмов");
//         break;

//     case personalMovieDB.count > 10 || personalMovieDB.count < 30 : 
//         console.log("Вы классический зритель");
//         break;

//     case personalMovieDB.count > 30 : 
//         console.log("Вы киноман");
//         break;

//     // default:
//     //     console.log("Произошла ошибка");
//     //     break;


if (personalMovieDB.count < 10 ){
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30){
    console.log("Вы киноман");
} 


console.log(personalMovieDB);
