'use strict';

// new RegExp('pattern', 'flags');
// /pattern/f

const ans = prompt ('Введите ваше имя');

const reg = /n/i;

console.log(reg.test(ans));

// \d - ищем цифры
// \w - ищем буквы
// \s - пробелы

const str = 'My name is R2D2';

console.log(str.match(/\w\d\w\d/i));

// \D - не цифры
// \W - не буквы

// i - найти вне зависимоти от регистра
// g - несколько схождений
// m - много сторочный режим

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('Password');
// console.log(pass.replace(/./g, "*"));

console.log('12-34-56'.replace(/-/g, ':'));