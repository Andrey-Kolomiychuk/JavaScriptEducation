"use strict";

// const now = new Date(0); 1970,01,01

// console.log(now);

const now = new Date();

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

console.log(now.setHours(40));

//new Date.parse('2020-05-01');

let start = new Date();

for (let i= 0; i< 100000; i++) {
    let some = i ** 3; //возведение в степень
}

let end = new Date();

alert(`Цикл отработал за ${end - start}  миллисукунды`);
