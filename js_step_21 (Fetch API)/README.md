**Fetch API**  

More about Feth API: https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch  
Fake online REST API: https://jsonplaceholder.typicode.com/

API (Application Programming Interface) - the interface of some software or application. It is a set of data and capabilities that provides us with some kind of ready-made solution.  

The Fetch API provides a JavaScript interface for working with HTTP requests and responses. It also provides a global fetch () method that makes it easy and logical to fetch resources over the network asynchronously.  

Similar functionality was previously achieved using XMLHttpRequest. Fetch is the best alternative that can be easily used by other technologies.  

```js
fetch('http://example.com/movies.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });
```

An example of sending a POST request:
```js 
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}

postData('https://example.com/answer', { answer: 42 })
  .then((data) => {
    console.log(data); // JSON data parsed by `response.json()` call
  });
```