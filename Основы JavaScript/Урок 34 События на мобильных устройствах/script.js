"use strict";

// touchstart
// touchmove - движение пальца
// touchend 

// touchenter - зашел палец за пределы
// touchleave - 
// touchcancel

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Start');
    }); 
    
    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('Move');
    });

    

});