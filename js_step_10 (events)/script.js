'use strict';

// JavaScript Events references:
// https://oddler.ru/blog/i63
// https://developer.mozilla.org/ru/docs/Web/Events
// https://developer.mozilla.org/ru/docs/Web/API/Event

const   btn1 = document.querySelector("#btn1"),
        overlay = document.querySelector(".overlay"),
        btn2 = overlay.querySelector("#btn2"),
        link = document.querySelector("a");

        btn1.addEventListener("click", () => {
    alert("First");
});

btn1.addEventListener("click", () => {
    alert("Second");
});

// event - Data about the element with which we interact
const eventCallback = (event) => {
    console.log(event.target); // element
    btn1.removeEventListener("mouseenter", eventCallback);

};

btn1.addEventListener("mouseenter", eventCallback, {once: true});

// (!) Event bubbling is when an event handler is triggered on the nest itself, and then on its parent, and so on.
// (!) Всплытие событий - это когда обработчик событий срабатывает на самом вложенном, а потом на его родителе и так далее.
const commonEvent = (event) => {
    console.log(event.currentTarget);
    console.log(event.type);
};

// We have two elements, where .overlay is the parent of the #btn2, but at the same time an event was added to them that handle the same action (click).
btn2.addEventListener("click", commonEvent);
overlay.addEventListener("click", commonEvent);

link.addEventListener("click", function(event) {
    event.preventDefault();

    console.log(event.target);
});