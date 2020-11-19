'use strict';

// 1
function showThis(a, b) {
    console.log(this); // undefined

    function sum() {
        console.log(this); // undefined
        return a + b; // closure
    }

    console.log(sum());

}

showThis(5, 5); 

// 2
const obj = {
    a: 5,
    b: 3,
    sum: function() {
        console.log(this); // { a: 5, b: 3, sum: [Function: sum] }

        function shout() {
            console.log(this); // undefined - because it is not a method of an object
        }

        shout();
    }
};

obj.sum();


// 3 
function User(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    this.human = true;
    this.hello = function() {
        console.log(`Привет от ${this.name}`);
    };
} 

let ivan = new User('Ivan', 21);

// 4.1
function sayName(surname) {
    console.log(this);
    console.log(this.name + ' ' + surname);
}

const user = {
    name: "John"
};

sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

// 4.2
function count(num) {
    return this * num;
}

const double = count.bind(2); // this = 2
console.log(double(3)); // num = 3



// 1) Normal function: this = window, but if use strict is set then this = undefined
// 2) The context of object methods is the object itself
// 3) this in constructors and classes is a new instance of an object
// 4) Manual binding this: call, apply, bind

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this); // <button>Submit</button>
});

btn.addEventListener('click', () => {
    console.log(this); // undefined - arrow functions do not have their own context
});

const someObj = {
    num: 5,
    sayNumber: function() {

        // All arrow functions `() =>` do not have their own context, they take the context from their own parent
        const say = () => {
            console.log(this); // this = { num: 5, sayNumber: [Function: sayNumber] }
        };
        
        say();
    }
};

someObj.sayNumber();