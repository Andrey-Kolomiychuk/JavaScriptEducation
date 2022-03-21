'use strict';

//promise

// console.log('Запрос данных...');

// const req = new Promise(function(resolve, reject){ // resolve - что-то выполнилось правильно| reject - что-то неправ

//     setTimeout(() => {
//         console.log('Подготовка данных...');
    
//         const product = {
//             name: 'TV',
//             price: 2000
//         };
    
//         resolve(product);
    
//     }, 2000);

// });

// // req.then((product) =>{
// //     setTimeout(() =>{
// //         product.status = 'order';
// //         console.log(product);
// //     }, 2000);
// // });

// // req.then((product) => {
// //     const req2 = new Promise((resolve, reject) => {
// //         setTimeout(() =>{
// //             product.status = 'order';
// //             resolve(product);
// //         }, 2000);
// //     });

// //     req2.then(data => {
// //         console.log(data);
// //         });
// // });

// // req.then((product) => {
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             product.status = 'order';
// //             resolve(product);
// //         }, 2000);
// //     });
// // }).then(data => {
// //     console.log(data);
// // });

// // req.then((product) => {
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             product.status = 'order';
// //             resolve(product);
// //         }, 2000);
// //     });
// // }).then(data => {
// //     data.modify = true;
// //     return data;
// // }).then(data => {
// //     console.log(data);
// // });

// // req.then((product) => {
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             product.status = 'order';
// //             reject();
// //         }, 2000);
// //     });
// // }).then(data => {
// //     data.modify = true;
// //     return data;
// // }).then(data => {
// //     console.log(data);
// // }).catch(() => {
// //     console.log('Произошла ошибка');
// // });


// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then(data => {
//     console.log(data);
// }).catch(() => {
//     console.log('Произошла ошибка');
// }).finally(() => {
//     console.log('Finally');
// });

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

Promise.all([test(1000), test(2000)]).then(() => { // ждем пока все методы выполнятся
    console.log('All');
});

Promise.race([test(1000), test(2000)]).then(() => {  // по первому действию, что сделаеться быстрее
    console.log('All');
});