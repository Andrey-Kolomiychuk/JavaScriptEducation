"use strict";

const str = "test";
const arr = [1,2,3];

console.log(arr.length);
console.log(str[2]);

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

let fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));

const logg = "Hellow World!";
console.log(logg.slice(6, 12));
console.log(logg.slice(-5, -1));

console.log(logg.substring(6, 12));
console.log(logg.substr(6, 5));


const num = 12;
console.log(Math.round(num)); // округление

const test = "12.2px";
console.log(parseInt(test)); // перевод в int
console.log(parseFloat(test)); // перевод в int
