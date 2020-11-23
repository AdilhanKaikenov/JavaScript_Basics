'use sctrict';

// Article: https://habr.com/ru/company/ruvds/blog/419997/

// A well-designed module doesn't depend on other code in any way
// Modules allow us to avoid pollution of the global space and avoid conflict situations with the same names

const app = 'data'; // error 'app' already exists

const number = 1;

// 1) The trick is called anonymous self-calling function:
(function(){
    const number = 2;
    console.log(number);
}());

console.log(number);

// 2) Another approach using object interface.
// We write the module into a variable and return methods that will be available from the outside into it:
const user = (function(){
    const privat = function() {
        console.log("I am privat!");
    };

    return {
        sayHello: privat
    };
}());

user.sayHello();