'use strict';

class Rectangle {

    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

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

const square = new Rectangle(10, 10);
const long = new Rectangle(20, 100);

console.log(square.calcArea()); // 100
console.log(long.calcArea()); // 2000

const div = new ColoredRectangleWithText(10, 25, 'Hello World', 'red');
div.showMyProps(); // Text: Hello World, Color: red