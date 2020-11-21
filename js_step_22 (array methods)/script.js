'use strict';

// (!) The forEach method never returns a new array to us

// filter
const names = ['Ann', 'Mark', 'Mariya', 'Kseniya'];

const shortNames = names.filter(function(name) {
    return name.length < 5;
});

console.log(shortNames);

// map
const answers = ['AnN', 'MaRk', 'MariYa', 'KSENIYA'];

const result = answers.map(item => item.toLowerCase());
console.log(result);

// every and some

const data = [4, 'String', true];

console.log(data.some(item => typeof(item) === 'number')); // true - because of 4
console.log(data.every(item => typeof(item) === 'number')); // false - because not every item is a number

// reduce 

const numbers = [1, 4, 3, 4, 5];
                // 3    1
                // 1    4
                // 5    3
                // 8    4
                // 12   5
                // 17
const sum = numbers.reduce((sum, number) => sum + number, 3); // 3 - default value (optional)
console.log(sum);

let fruits = ['apple', 'bananas', 'pine'];

fruits = fruits.reduce((sum, item) => `${sum}, ${item}`); 
console.log(fruits); 

// Example:
const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

console.log(Object.entries(obj)); // A useful method when we need to work with an object as an array

const newArr = Object.entries(obj)
    .filter(item => item[1] === 'persone')
    .map(item => item[0]);

console.log(newArr);