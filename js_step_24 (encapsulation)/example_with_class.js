'use strict';

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    say() {
        console.log(`Имя пользователя: ${this.name}, возраст ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Недопустимое значение!');
        }
    }
}

const smith = new User('Will', 50);
smith.say();

smith.age = 99;

smith.say();