"use strict";

// const num = new Number(3);
// console.log (num);

//const num = new Function (3); // тоже будет работать но устаревшее.

function User(name, id){
    this.name =name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушел`);
};

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

console.log(ivan);
console.log(alex);

ivan.hello();
alex.hello();
ivan.exit();
alex.exit();