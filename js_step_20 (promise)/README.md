**Promise object**  
Promise is a special object in JavaScript that ties "create" and "consume" codes together. The "creating" code can run as long as it takes to get the result, and the promise makes the result available to the code that subscribes to it when the result is ready.  

The function passed to the new Promise is called the executor. When a Promise is created, it starts automatically. It should contain the "generating" code that will produce the result someday:
```js
let promise = new Promise(function(resolve, reject) {
    // code
});
```
Its resolve and reject arguments are callbacks that JavaScript itself provides. Our code is only inside the executor.  

Whenever he receives the result, now or later, it doesn't matter, he should call one of these callbacks:
* resolve (value) - if the work completed successfully, with the result value.
* reject (error) - if an error occurred, error is an error object.

So, the executor starts automatically, it has to do the work and then call resolve or reject.  

![js-01](https://raw.githubusercontent.com/AdilhanKaikenov/javaScript_Basics/master/js_step_20%20(object,%20array)/etc/promise.jpg)

```js
let promise = new Promise(function(resolve, reject) {
    // this function will be executed automatically when new Promise is called

    // signal after 1 second that the task is completed with the result "done"
    setTimeout(() => resolve("done"), 1000);
});
```

There can be one thing: either the result or the error. All subsequent calls to resolve and reject will be ignored:
```js
let promise = new Promise(function(resolve, reject) {
  resolve("done");

  reject(new Error("…")); // ignored
  setTimeout(() => resolve("…")); // ignored
});
```

**Consumers: then, catch, finally**  
Promise serves as a link between the executor (the "generating" code) and the consuming functions, which will receive either a result or an error. Consumer functions can be registered (signed) using the .then, .catch, and .finally methods.  

```js
function loadScript(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

    document.head.append(script);
  });
}

let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js");

promise.then(
  script => alert(`${script.src} загружен!`),
  error => alert(`Ошибка: ${error.message}`)
);

promise.then(script => alert('Ещё один обработчик...'));
```