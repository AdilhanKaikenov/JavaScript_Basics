**Strict mode - "use strict"**  
When ECMAScript 5 (ES5) came along, it added new features to the language and changed some of the existing ones. These changes are not applied by default to keep legacy code working as before. Therefore, we need to explicitly activate them using a special directive: "use strict".  
The directive looks like a line: "use strict" or 'use strict'. When it is at the beginning of a script, the entire script runs in "modern" mode.
```js
"use strict";

// этот код работает в современном режиме
...
```

**Alert, Confirm and Prompt methods**  
* The alert () method has one argument (message) - the text of the message to display in the modal dialog box. The alert () returns nothing as a result.  
```js
  alert("Hello");
```
* The prompt () method is designed to display a dialog box with a message, a text field for data entry, and buttons "OK" and "Cancel". This window is intended for requesting data that the user needs to enter into a text field.
```js
  const result = prompt('title', 'default');
```

```js
  let age = prompt('Сколько тебе лет?', 100);
  alert(`Тебе ${age} лет!`); // Тебе 100 лет!
```
* The confirm () method of the window object is used to display a modal dialog box with a message and "OK" and "Cancel" buttons. It is usually used to ask the user for permission to perform an action.  
```js
let isBoss = confirm("Ты здесь главный?");
alert( isBoss ); // true, если нажата OK
```

**3 types of operators: "unary", "binary" and "ternary"**  
* unary allows operations with one argument
* binary allows operations with two argument
* ternary allows operations with three argument  

**Data type classification in JavaScript**  
![js-01](https://raw.githubusercontent.com/AdilhanKaikenov/JavaScript_Basics/master/js_step_1/etc/types_2020.jpg)  

**Dynamic typing**  
Dynamic typing is a technique in which a variable is associated with a type at the time of assigning a value, and not at the time of declaring a variable. Simply put, dynamic typing is the ability of one data type to transform into another.  

