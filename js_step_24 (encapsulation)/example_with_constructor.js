'use strict';

function User(name, age) {

    let userName = name;
    let userAge = age;

    this.say = () => {
        console.log(`Имя пользователя: ${userName}, возраст ${userAge}`);
    };

    this.getAge = function() {
        return userAge;
    };

    this.setAge = function(age)  {
        if (typeof age === 'number' && age > 0 && age < 110) {
            userAge = age;
        } else {
            console.log('Недопустимое значение!');
        }
    };
}

const smith = new User('Will', 50);
console.log(smith.name); // undefined
console.log(smith.age); // undefined
console.log(smith.getAge()); // 50

smith.say();

smith.setAge(300);
smith.setAge(30);

smith.say();