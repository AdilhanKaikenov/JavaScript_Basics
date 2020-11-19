**Element.classList**  

```js
var elementClasses = elem.classList;  // The result is a pseudo-array DOMTokenList containing all classes of the elem node
```

Methods:
* add (String [, String])  
   Adds the specified classes to an element
* remove (String [, String])  
    Removes the specified classes from an element
* item (Number)  
    The result is the same as calling classList [Number]
* toggle (String [, Boolean])  
    If the element has no class, it adds, otherwise it removes it. When the second parameter is false, it removes the specified class, and if true, adds it.
    If undefined or a variable with typeof == 'undefined' is passed as the second parameter, the behavior will be the same as passing only the first parameter when calling toggle.
* contains (String)  
    Checks if the element has the given class (returns true or false)

**Delegating events**  
The idea is that if we have many elements, events on which need to be handled in a similar way, then instead of assigning a handler to each, we put one handler on their common ancestor. This is one of the most useful DOM tricks.  

It is often used when there are many elements whose handling is very similar, but not only for this.

Algorithm:
1) We hang the handler on the container.
2) In the handler, we check the original event.target element.
3) If the event happened inside the element we need, then we process it.