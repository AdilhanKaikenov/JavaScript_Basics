Create setTimeout:
```js
const timerId = setTimeout(logger, 200, 'text');

function logger(text) {
    console.log(text);
}
```

If we want the function to repeat after a certain time:
```js
const timerId = setInterval(logger, 200, 'text');

function logger(text) {
    console.log(text);
}
```

To stop timeout of interval:
```js
clearInterval(timerId);
```

**Recursive setTimeout() VS setInterval()**  
When a timer with an interval is running, it doesn't care how long the function inside it will run, and if the function runs longer than the specified interval, then it won't wait for it to end.
```js
setInterval(someFunction, 2000);
```

Recursive setTimeout example:
```js
let id = setTimeout(function someFunction() {
    // actions
    id = setTimeout(someFunction, 500); // wait until all actions are completed
}, 500);
```