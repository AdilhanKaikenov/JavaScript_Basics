'use strict';

let num = 20; // global variable

function showFirstMessage(text) {
    console.log(text);
    let num = 10; // local variable
    console.log(num); // 10
}

showFirstMessage("Hello!");
console.log(num); // 20

// Function Declaration Example
// (!) Function exists even before the code is run

// here I call calc function
console.log(calc(1, 2));
console.log(calc(2, 2));
console.log(calc(10, 5));

// here calc() function declaration
function calc(a, b) {
    return (a + b);
}

// Function Expression Example
const logger = function() {
    console.log("Hello from Function Expression Example!");
};

logger(); // call logger()

// Arrow functions Examples
const arrowFunction1 = a => console.log(a);
const arrowFunction2 = (a, b) => a + b;
const arrowFunction3 = (a, b) => { return a + b; };
