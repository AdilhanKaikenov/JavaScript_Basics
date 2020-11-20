'use strict';

console.log("Загрузка данных...");

const req = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Поготовка данных...");

        const product = {
            name: 'TV',
            price: 2000
        };
        
        resolve(product);
    }, 2000);
});

// Promise chain - we have a sequence of asynchronous tasks to be completed one after another.
req.then(product => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'ordered';
            console.log(product);
        }, 2000);
    });
}).then(data => {
    console.log(data);
}).catch(() => {
    console.error('Произошла ошибка');
}).finally(() => {
    console.log('Завершающие операции...');
});

// all and race 
const test = time => { 
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), time);
    });
};

// Will wait for the completion of all promises and then do something
Promise.all([test(1000), test(5000)]).then(() => {
    console.log('All');
});

// Will wait for the completion of any first promise and then do something
Promise.race([test(1000), test(2000)]).then(() => {
    console.log('Race');
});