
'use strict';

const persone = {
    name: 'Alex',
    tel: '+744444',
    parents: {
        mom: 'Olga',
        dad: 'Mike',

    }
};

console.log(JSON.stringify(persone));
console.log(JSON.parse(JSON.stringify(persone)));

const clone = JSON.parse(JSON.stringify(persone)); //создаться глубокий клон. тоесть независимая копия.
clone.parents.mom = 'Ann';

console.log(persone);
console.log(clone);

let obj = { // создание копии через Object.assign)()
    a: 1,
    b: 2,
  };
  let objCopy = Object.assign({}, obj);
  console.log(objCopy);
  // Результат - { a: 1, b: 2 }