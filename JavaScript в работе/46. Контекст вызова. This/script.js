"use strict";

//контекст вызова

// function showThis() {
//     console.log(this); //this - контестс
//     function sum(){
//         console.log (this);
//         return this.a + this.b;
//     }
// }

// showThis(4, 5);
// showThis();

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function(){
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();

// function User(name, id){
//     this.name =name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`);
//     };
// }

// let ivan = new User(`Ivan`, 23);

// function sayName(surname){
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count (num) {
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));




// 1) Обычная функция: this = window, но если use strict - undefined
// 2) Контекст у методов обьекта - сам обьект
// 3) this в конструкторах и классах - это новый экземпляр обьекта
// 4) Ручня привязка this: call, apply, bind


const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    // console.log(this);
    this.style.backgroundColor = 'red';
});

btn.addEventListener('click', (e) => {
    // console.log(this);
    e.target.style.backgroundColor = 'red';
});

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
          console.log(this);  
        };
        say();
    }
};

obj.sayNumber();

// const double = (a) => {
//     return a * 2;
// };

// const double = a => a * 2;
// console.log(double);

const double = (a, b) => a * b * 2; // если два аргумента то скобки
console.log(double);