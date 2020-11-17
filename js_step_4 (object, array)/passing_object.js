"use strict";

// Primitive types are passed by value, and objects by reference
let a = 5, 
    b = a; // b = 5

b = b + 5; // b = 5 + 5 = 10

console.log("a = " + a); // 5
console.log("b = " + b); // 10

const obj = {
    a: 5,
    b: 10,
    c: {
        f: 15
    }
};

const copyObj1 = obj; // object is not copied
copyObj1.a = 10; // by modifying the copy, we also affect the original object
copyObj1.c.f = 20;

// Objects will be the same
console.log(copyObj1); // { a: 10, b: 10, c: { f: 20 } }
console.log(obj); // { a: 10, b: 10, c: { f: 20 } }

// We can write shallow copy function (not deep copy)
function copy(mainObj) {
    let mainObjCopy = {};

    let key;
    for (key in mainObj) {
        mainObjCopy[key] = mainObj[key];
    }

    return mainObjCopy;
}

const copyObj2 = copy(obj);
copyObj2.a = 30; 
copyObj2.c.f = 25;

// Internal object (obj.c) was not copied
console.log(copyObj2); // { a: 30, b: 10, c: { f: 25 } }
console.log(obj); // { a: 10, b: 10, c: { f: 25 } }

// Object assign - this method combines two objects and creates a new independent copy.
const numbers = {
    a: 5, 
    b: 10
};

const add = {
    d: 15, 
    e: 50
};

// numbers obj + add obj
console.log(Object.assign(numbers, add));

const numbersCopy = Object.assign({}, numbers); // numbersCopy the copy of the numbers object
numbersCopy.a = 555;

console.log(numbersCopy); // { a: 555, b: 10, d: 15, e: 50 }
console.log(numbers); // { a: 5, b: 10, d: 15, e: 50 }

// Copy an array
const arr = [1, 2, 3, 4];
const arrCopy = arr.slice();

arrCopy[2] = 1000;

console.log(arrCopy); // [ 1, 2, 1000, 4 ]
console.log(arr); // [ 1, 2, 3, 4 ]

// Spread operator (ES6-ES9)
const   videos = ['youtube', 'vimeo', 'rutube'],
        blogs = ['blogger', 'journal', 'wordpress'],
        internet = [...videos, ...blogs, 'instagram', 'facebok'];

console.log(internet);

// -----
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const args = [1, 2, 3];
log(...args);

// Copy using Spread operator
const arr2 = ['a', 'b'];
const newArr2 = [...arr2]; // copy of arr2

const obj2 = {
    a: 1,
    b: 2
};
const obj2Copy = { ...obj2 }; // copy of obj2

