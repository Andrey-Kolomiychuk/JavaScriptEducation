'use strict';

const box = document.querySelector('.box'),
    btn = document.querySelector('button');

// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;

const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width, height);

btn.addEventListener('click', () => {
    //box.style.height = box.scrollHeight + 'px'; //слева идут css стили справа цифры поэтому добовляем 'px'.
    console.log(box.scrollTop); // выводит количество пикселей который прокрутли вниз.
});

console.log(box.getBoundingClientRect().top); //вывести кардинаты 

const  style = window.getComputedStyle(box);
console.log(style);

console.log(document.documentElement.clientWidth);
// window.scrollBy(0, 400); - команда для консоли перемещяет на 400 вниз
//  window.scrollTo(0, 400); - обратная команда, наоборот.