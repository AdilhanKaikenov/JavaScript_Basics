'use strict';

// AJAX - Asynchronous Javascript And Xml

// In order for the page (frontend) to communicate with the server, we need the http requests that we will send. To make it happen asynchronously 
// i.e. without rebooting, we need Ajax technology

// The current exchange rate will come from the server

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    // request.open(method, url, async?, username?, password?);
    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = "Что-то пошло не так";
        }
    });

});