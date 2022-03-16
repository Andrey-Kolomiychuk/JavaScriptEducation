"use strict";

// function showFirstMessage() {
// console.log("Hellow world!");
// }
// showFirstMessage();

// function showFirstMessage(text) {
//     console.log(text);
// }
//     showFirstMessage();


// function showFirstMessage(text) {
//     console.log(text);
//     let num = 20;

// }  
//     showFirstMessage();
//     console.log(num); // в функции переменные остаютьсяв функции, дальше не идут

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);


}  
    showFirstMessage();
    console.log(num); // выводит 20

// function calc (a, b) {
//     return (a + b);
// }

// console.log(calc(3,5));

function ret(){
    let num = 50;
    return num;
}


//function decoration  Создается только тогда,
//когда доходит поток кода, можно вызвать только после обьявления


// logger() - ошибка, нужно после

const logger = function() {
    console.log("Hello");
};

logger();

const calc = (a, b) => a + b;
// const calc = (a, b) => { return a + b };


let a = 3;
function addTwo(x) {
       let ret = x + 2;
 return ret;
 }

 let b = addTwo(a);
 console.log(b);


// Область видимости
let val1 = 2;
function multiplyThis(n) {
let ret = n * val1;
return ret;
}
let multiplied = multiplyThis(6);
console.log('example of scope:', multiplied);


let val = 7;
function createAdder() {
function addNumbers(a, b) {
    let ret = a + b;
    return ret;
    }
    console.log("Шаг сделан");
return addNumbers;
}
let adder = createAdder();
let sum = adder(val, 8);
console.log('example of function returning a function: ', sum);

//Замыкание
function createCounter() {
    let counter = 0;
    const myFunction = function() {
        counter = counter + 1;
        return counter;
        };
    return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log('example increment', c1, c2, c3);
   
// Со стрелками
// let c = 4
// const addX = x => n => n + x
// const addThree = addX(3)
// let d = addThree(c)
// console.log('example partial application', d)

let c = 4;
function addX(x) {
  return function(n) {
     return n + x;
  };
}
const addThree = addX(3);
let d = addThree(c);
console.log('example partial application', d);


// function sayHi(name) {
//     var phrase = "Привет, " + name;
//     alert( phrase );
//   }
  
//   sayHi('Вася');

var phrase = 'Привет';
say('Вася');


function say(name) {
    console.log( name + ", " + phrase );
}


