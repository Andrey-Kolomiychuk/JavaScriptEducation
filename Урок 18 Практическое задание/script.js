/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilm;

function start(){
    numberOfFilm = +prompt("Сколько Вы посмотрели фильмов?", "");

    while (numberOfFilm == "" || numberOfFilm == null || isNaN(numberOfFilm)){
        numberOfFilm = +prompt("Сколько Вы посмотрели фильмов?", "");
    }
    console.log(numberOfFilm);
}

start();

const personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    generes: [],
    private: false,
};


function rememberMyFillm() {
    for (let i = 0; i < 2; i++){
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
}

rememberMyFillm();


function detectPersonalLevel(){
    if (personalMovieDB.count < 10 ){
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30){
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();


function showMyDB(){
    if (personalMovieDB.private == false){
        console.log(personalMovieDB);
    } else {
        console.log("Приватность включина, нет доступа!");
    }
}
showMyDB();

// // Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres

function writeYourGenres (){
    for (let i = 1; i <= 3; i++){
        const a = prompt("Ваш любимый жанр под номером" + " " + i , "");
            if (a != null &&  a != "" && a.length < 50){
            personalMovieDB.generes[i] = a;
        } else {
            i--;
            console.log("Error");
        }
    }
}

writeYourGenres();
console.log(personalMovieDB);
