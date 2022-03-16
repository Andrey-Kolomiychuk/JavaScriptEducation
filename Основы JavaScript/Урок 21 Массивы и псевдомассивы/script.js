"use strict";

const arr = [1,2,3,6,8];

// arr.sort(); // сортирует по строчкам( вначале все цифры начинаються с 1, потом с двойки и т.д..
// console.log(arr);


arr.sort(compareNum);
function compareNum(a, b) {
    return a - b;
}


arr.pop(); //удаляет последний елемент из масива.
arr.push(10); //добовляет еллемент в конец.

for (let i = 0; i < arr.lenghth; i++){
    console.log(arr[i]);
}

for (let value of arr){
    console.log(value);
}

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри масива ${arr}`);
});

const str = prompt("", "");
const products = str.split(","); //заполняеться массив данными с одной строки разделенные еллементы запятой. 
console.log(products.join(';')); //обьедеяеться данные в одну строчку, данные разделяються точкой с запетой. 