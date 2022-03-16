'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue, width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// Устаревшый способ
// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(iteam => {
    iteam.style.backgroundColor = 'blue';
});


const div = document.createElement('div');
const text = document.createTextNode('Тут был я');

div.classList.add('black'); 
//document.body.append(div);
// document.querySelector('.wrapper').append(div);

wrapper.append(div); // добовляет в конец
// wrapper.appendChild(div); // тоже самое
// wrapper.prepend(div); // добовляет в начало
// wrapper.insertBefore(div, hearts[1]);


//hearts[0].before(div); вставить перед hearts[0]
//hearts[0].after(div); вставить после hearts[0]

//circles[0].remove(); удаляем
// wrapper.removeChild(heart[1]); удаляем

// hearts[0].replaceWith(circles[0]); замена
// wrapper.replaceChild(circles[0], hearts[0]); замена

div.innerHTML = "<h1>Hello World</h1>"; // можно вставлять структуры
// div.textContent = "Hello"; // работает только с текстом

div.insertAdjacentHTML("afterbegin",'<h2>Hello</h2>'); 
//beforebegin - перед тем что пставлено
//afterbegin в начале класса
