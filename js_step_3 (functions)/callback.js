'use strict';

function first() {
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

// If the functions go one after another, this does not mean that they will be executed in such a sequence.
first();
second();

// Sequence Control
function learnLang(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback(); // callback will be executed after all actions
}

learnLang("JavaScript", function(){
    console.log("Прошел урок про Callback функции.");
});