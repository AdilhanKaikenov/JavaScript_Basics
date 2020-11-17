"use strict";

// Objects are structures that can store absolutely any data types in key and value format.
const options = {
    name: "",
    width: 1024,
    height: 1024,
    colors: { // They can also be nested (object inside object)
        border: 'black',
        bg: 'red'
    },

    makeTest: function() {
        console.log("Object test function.");
    }
};

// Remove some property
delete options.name; 

// Call object method
options.makeTest(); 

// Count object properties
console.log("The options object has " + Object.keys(options).length + " properties.");
console.log(Object.keys(options));

// To iterate over all properties, we can do the following
for (let key in options) {
    if (typeof(options[key]) === 'object') { // check if it is an inner object
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        } 
    } else if (typeof(options[key]) != 'function') { // check not a function
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}

// Access an inner object proprty
console.log(options["colors"]["border"]);

// Object destructuring (ES6)
const {border, bg} = options.colors;
console.log(border + ":" + bg);