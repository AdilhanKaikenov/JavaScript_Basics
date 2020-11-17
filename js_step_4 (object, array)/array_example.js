"use strict";

const arr = [1, 32, 51, 63, 8];

// (!) length is the last index plus one
console.log(arr.length); // 4 + 1 = 5
arr[99] = 0;
console.log(arr.length); // 99 + 1 = 100
console.log(arr);

// array loop
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
}

for (const iterator of arr) {
    const element = iterator;
}

arr.forEach(function(item, index, arr) {
    console.log(`${index}: ${item} внутри массива ${arr}`);
});

// Sort
console.log("Before sort(): " + arr);

arr.sort(compareNum);
console.log("After sort(): " + arr);

function compareNum(a, b) {
    return a - b;
}