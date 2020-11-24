'use strict';

function* count(n) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

// 1)
// const counter = count(7);
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);

// 2)
for (const counter of count(7)) {
    console.log(counter);
}