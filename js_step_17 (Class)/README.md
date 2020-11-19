Classes are beautiful wrappers for constructor functions. The classes inside are all the same functions.

Abstraction is when we separate a concept from its implementation.
```js 
'use strict';

// 1) The template by which we create something.
class Rectangle {

    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

// 2) Inheritance is the ability of our object or class to be based on another object or class.
class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, backgroundColor) {
        super(height, width); // must be called first 

        this.text = text;
        this.backgroundColor = backgroundColor;
    }

    showMyProps() {
        console.log(`Text: ${this.text}, Color: ${this.backgroundColor}`);
    }
}

// 3) Several instances that were created from a template.
const square = new Rectangle(10, 10);
const long = new Rectangle(20, 100);

console.log(square.calcArea()); // 100
console.log(long.calcArea()); // 2000

const div = new ColoredRectangleWithText(10, 25, 'Hello World', 'red');
div.showMyProps(); // Text: Hello World, Color: red
```