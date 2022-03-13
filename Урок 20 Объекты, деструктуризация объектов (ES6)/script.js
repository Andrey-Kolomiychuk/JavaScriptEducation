"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Тест");
    }
};

const {border, bg} = options.colors; // как вытащить из обьекта
console.log(border);

// console.log(options["colors"]["border"]); //скобки 

// console.log(options.name);

// // delete option.name;

// // console.log(option);
// let counter = 0; // счетчик
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]){
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение: ${options[key]}`);
//         counter++;
//     }
    
// }

// console.log(counter);

console.log(Object.keys(options));
console.log(Object.keys(options).length);
