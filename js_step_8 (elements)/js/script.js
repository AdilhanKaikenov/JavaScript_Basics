'use strict';

// Methods that work on the DOM document object model (works only inside the browser)

// Old ways:

const box = document.getElementById('box');
console.log(box);

// pseudo-array (it does not have all the methods that an array has)
const btns = document.getElementsByTagName("button"); // HTMLCollection - pseudo-array
console.log(btns);

const btn1 = document.getElementsByTagName("button")[1];
console.log(btn1);

const circles = document.getElementsByClassName('circle');
console.log(circles);

// https://learn.javascript.ru/css-selectors - resourse about css selectors

// Modern ways: 
const hearts = document.querySelectorAll('.heart');
console.log(hearts); // NodeList - pseudo-array

hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart); // first matched element

// Actions with elements on the page
box.style.backgroundColor = 'blue';
box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[2].style.borderRadius = '100%';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'pink';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'pink';
});

const div = document.createElement('div'); // does not exist on the page yet
const text = document.createTextNode('Тут был я.'); 

div.classList.add("black");

const wrapper = document.querySelector('.wrapper');

// add div to the page:

// wrapper.append(div); 
// wrapper.prepend(div); 
// hearts[0].after(div);
hearts[0].before(div);

// remove element
// circles[0].remove();

// replace
hearts[0].replaceWith(circles[0]);


div.textContent = "Hello"; // only text can be added
div.innerHTML = "<p>Html text</p>"; // text or html can be added

div.insertAdjacentHTML("beforebegin", "<p>Hello</p>")