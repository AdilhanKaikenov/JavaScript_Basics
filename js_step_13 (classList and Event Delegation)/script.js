'use strict';

const   btns = document.querySelectorAll('button'),
        wrapper = document.querySelector('.btn-block');

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }

    btns[1].classList.toggle('red');
});

// Event delegation


wrapper.addEventListener('click', (event) => {
    // event.target in if because not all elements support click event
    if (event.target && event.target.matches('button.red')) { // We delegate the click event from the parent to its descendants
        console.log('Hello');
    }
});

const newBtn = document.createElement('button');
newBtn.classList.add('red');
wrapper.append(newBtn);