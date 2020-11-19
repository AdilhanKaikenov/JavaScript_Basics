In JavaScript, `this` is the current execution context of the function. Since the function can be called in four ways:

* function call: alert ('Hello World!'),
* method call: console.log ('Hello World!'),
* constructor call: new RegExp ('\\ d'),
* indirect call: alert.call (undefined, 'Hello World!'),
  
Each of them defines its own context, the behavior of this slightly does not meet the expectations of novice developers. In addition, strict mode also affects the execution context.* 

```js
'use strict';

function showThis(a, b) {
    console.log(this); // undefined

    function sum() {
        console.log(this); // undefined
        return a + b; // closure
    }

    console.log(sum());

}

showThis(5, 5); // 1) Normal function: this = window, but if use strict is set then this = undefined
```

```js
'use strict';

const obj = {
    a: 5,
    b: 3,
    sum: function() {
        console.log(this); // (!)
    }
};

// 2) The context of object methods is the object itself
obj.sum(); // { a: 5, b: 3, sum: [Function: sum] }
```

```js
'use strict';

// 3) this in constructors and classes is a new instance of an object
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
```

```js
'use strict';

// 4) Manual binding this: call, apply, bind

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
```


This context in the case of arrow functions:
```js
'use strict';

const someObj = {
    num: 5,
    sayNumber: function() { 

        console.log(this); // this = { num: 5, sayNumber: [Function: sayNumber] }

        // All arrow functions `() =>` do not have their own context, they take the context from their own parent
        const say = () => { // An arrow function is used here
            console.log(this); // this = { num: 5, sayNumber: [Function: sayNumber] }
        };
        
        say();
    }
};

someObj.sayNumber();
```

This context in classic function and arrow function: 
```js 
const btn = document.querySelector('button');

// 1)
btn.addEventListener('click', function() {
    console.log(this); // <button>Submit</button>
});

// 2
btn.addEventListener('click', () => {
    console.log(this); // undefined - arrow functions do not have their own context
});
```