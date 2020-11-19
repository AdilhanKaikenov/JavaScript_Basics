'use strict';

// In standard ES6, classes appeared, which are a beautiful wrapper for such constructors.

// ES5 standard
function User(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.hello = function() {
        console.log(`Привет от ${this.name}`);
    };
} 

User.prototype.exit = function () {
    console.log(`Пользователь ${this.name} вышел`);
};

const ivan = new User('Ivan', 21);
const alex = new User('Alex', 29);

console.log(ivan);
console.log(alex);

ivan.hello();
alex.hello();

ivan.exit();
alex.exit();

