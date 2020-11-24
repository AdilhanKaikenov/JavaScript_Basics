'use strict';

const   btn = document.querySelector('.btn'),
        box = document.querySelector('.box');
let pos = 0;

// 1)

// function myAnimation() {
//     const id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             box.style.top = pos + 'px';
//             box.style.left = pos + 'px';
//         }
//     }
// }

// btn.addEventListener('click', myAnimation);

// 2)

function myAnimation() {
    pos++;
    box.style.top = pos + 'px';
    box.style.left = pos + 'px';

    if (pos < 300) {
        requestAnimationFrame(myAnimation);
    }
}

btn.addEventListener('click', () => requestAnimationFrame(myAnimation));