'use strict';

console.log(document.documentElement); // html element
console.log(document.head); // head element
console.log(document.body); // body element

console.log(document.body.childNodes); // pseudo-array of DOM nodes (not DOM elements)
console.log(document.body.firstChild); 
console.log(document.body.firstElementChild); 
console.log(document.body.lastChild); 
console.log(document.body.lastElementChild); 

console.log(document.querySelector("#current").parentNode.parentNode); 
console.log(document.querySelector("#current").parentElement.parentElement); 

// About data atributes:
// Any attribute whose name begins with data- is a data- * attribute

console.log(document.querySelector("[data-current='3']")); 
console.log(document.querySelector("[data-current='3']").nextSibling); 
console.log(document.querySelector("[data-current='3']").nextElementSibling); 
console.log(document.querySelector("[data-current='3']").previousSibling); 
console.log(document.querySelector("[data-current='3']").previousElementSibling); 

