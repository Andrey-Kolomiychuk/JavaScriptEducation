"use strict";

// console.log(document.head); // выведет head
// console.log(document.documentElement); // все елементы
// console.log(document.body.childNodes); 
// console.log(document.body.firstChild); 
// console.log(document.body.firstElementChild);  // так лучше выдает елмент а не строчку
// console.log(document.body.lastChild); 

// console.log(document.querySelector('#current').parentNode.parentNode); //  получаем Node
// console.log(document.querySelector('#current').parentElement); // получаем первый елемент - так лучше чем через Node



// console.log(document.querySelector('[data-current="3"]').nextSibling);
// console.log(document.querySelector('[data-current="3"]').previousSibling);
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

for (let node of document.body.childNodes){
    if (node.nodeName == '#text') {
        continue;
    }

    console.log(node);
}