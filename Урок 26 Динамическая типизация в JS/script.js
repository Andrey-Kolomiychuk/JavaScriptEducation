
"use strict";

console.log(typeof(String(null)));
console.log(String(null)); // можно и так
console.log(String(4));

// способо конкантинации 
console.log(typeof(5 + ''));

const num = 5;
console.log("https://vk.com/catalog/" + num); // старый стиль

const fontSize = 26 + 'px';

//To number
console.log(typeof(Number("12")));
console.log(typeof(+ "12"));
console.log(typeof(parseInt("15px", 10)));


let answ = +prompt("Hello", "");

// To boolean
// false = 0,'', null, underfined, NaN;

//1
let switcher = null; //null

if (switcher) {
    console.log('Working..,');
}

switcher = 1; //true

if (switcher) {
    console.log('Working..,');
}

//2
console.log(typeof(Boolean("12"))); //переобразовуем строку в булин

//3
console.log(typeof(!!"444444")); //редко встречаеться