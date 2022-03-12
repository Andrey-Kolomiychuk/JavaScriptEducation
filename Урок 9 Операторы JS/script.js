"use strict";

console.log('arr' + " - object");
// console.log(4 + + "5"); // int - результат 9
// console.log(4 + "5"); // string - результат 45

let  incr = 10, 
    decr = 10;
// incr++;
// decr--;
// console.log(incr++); //вначале выводит литералы потом действие
// console.log(decr--);

console.log(++incr); //вначале действие потом вывдит в лог
console.log(--decr);

console.log(8%3);

console.log(2 + 2 * 4 == "8");

// && - и
// || - или 

const isChecked = true,
     isClose = false;

console.log(isChecked || isClose);