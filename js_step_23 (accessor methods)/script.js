'use strict';

const person = {
    name: 'Alex',
    age: 23,

    get userAge() {
        return this.age;
    },

    set userAge(age) {
        this.age = age;
    }
};

console.log(person.userAge = 30);
console.log(person.userAge);