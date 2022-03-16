"use strict";

const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function (){ устаревшое
//     alert('Click');
// };

// btn.addEventListener('click', () => {
//     alert('click');
// });

// const deleteElement = (e) => {
//     e.target.remove();
// };

// btn.addEventListener('click', deleteElement);

// btn.addEventListener('mouseenter', (e) => {
//     console.log(e);
//     console.log(e.target); 
//     e.target.remove(); //удаляет когда наводишь.

//     console.log('Hover');
// });
// let i = 0;
// const deleteElement = (e) => {
//     console.log(e.target);
//     i++;
//     if (i == 1) {
//         btn.removeEventListener('click', deleteElement)
//     }
// };

// btn.addEventListener('click', deleteElement);


const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);


const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.target);
});

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});
