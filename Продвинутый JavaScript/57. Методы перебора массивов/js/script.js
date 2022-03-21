'use strict';

//filter

// const names =['Ivan', 'Ann', 'Ksenia', 'Voldemart'];
// const shortNames = names.filter(function(name) {
//     return name.length < 5;
// });

// console.log(shortNames);

//map

// const answer = ['Ivan','AnnA', 'Hello'];
// const result = answer.map(item => {
//     return item.toLocaleLowerCase();
// });

// // const result = answer.map(item => item.toLocaleLowerCase());

// console.log(result);

// // every/some

// const some = [4, 'qsdq', 'sdddsdfsdf'];
// console.log(some.some(item => typeof(item) === 'number')); // есть ли в масиве хоть одна цифра
// console.log(some.every(item => typeof(item) === 'number')); // все ли в масиве хоть одна цифра


//reduce

// const arr =[4, 5, 1, 3, 2, 6];
//                         // 0       4
//                         // 4       5
//                         // 9       1
// const res = arr.reduce((sum, current) => sum + current);

// const arr =[4, 5, 1, 3, 2, 6];
//                         // 0       4
//                         // 4       5
//                         // 9       1
// const res = arr.reduce((sum, current) => sum + current, 3); //поставили начальное занчение 3


// const arr =['apple', 'pear', 'plum'];

// const res = arr.reduce((sum, current) => `${sum} + ${current}`);
// console.log(res);


const obj = {
    ivan: 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'person')
.map(item => item[0]);

console.log(newArr);