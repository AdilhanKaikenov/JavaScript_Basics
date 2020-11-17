**Functions**  

![js-01](https://raw.githubusercontent.com/AdilhanKaikenov/JavaScript_Basics/master/js_step_3%20(functions)/etc/functions.jpg)  

**Lexical Environment**  
In JavaScript, every function, code block, and script that it executes has an internal (hidden) object associated with it, called the LexicalEnvironment.  

The lexical environment object consists of two parts:
* Environment Record is an object that stores all local variables (as well as some other information such as the value of this) as properties.
* A reference to the external lexical environment - that is, one that matches the code outside (outside of the current curly braces).

**Closure (Замыкание)**  
Closure is the function itself along with all external variables that are available to it.
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). ... In JavaScript, closures are created every time a function is created, at function creation time.  

When the code wants to access a variable, it first searches in the internal lexical environment, then in the external one, then in the next, and so on, up to the global one.  

```js
const message = 'The British are coming.';

function sayMessage(){
  alert(message); // Here we have access to message,
  // even though it's declared outside this function!
}
```

**Callback function in JavaScript**  
In JavaScript, functions are objects. So, we can pass objects to functions.  
A callback is a function passed as an argument to another function.  

Many actions in JavaScript are asynchronous.  
Such functions are called "asynchronous" because the action (script loading) will not be completed now, but later.  
If after calling loadScript (...) there is some code, then it will not wait for the script to load. 

```js
function loadScript(src) {
  let script = document.createElement('script');
  script.src = src;
  document.head.append(script);
}

// load and execute script
loadScript('/my/script.js');

// code written after calling the loadScript function
// will not wait for the complete script download
// ...

newFunction (); // no such function exists!
```

Let's pass the callback function as the second argument to loadScript to call it when the script is loaded:
```js
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(script);

  document.head.append(script);
}

loadScript('/my/script.js', function() {
  // this function will be called after the script is loaded
  newFunction(); // now everything works
});
```

The idea is this: the second argument is a function (usually anonymous), which is executed upon completion of the action.  