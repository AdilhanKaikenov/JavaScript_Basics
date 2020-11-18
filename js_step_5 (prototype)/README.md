The javascript is an object-oriented language, but we can also call it prototype-oriented language (a special case of oop), since everything in javascript is built on prototypes.  

The `__proto__` is considered outdated and somewhat deprecated (in browser-only part of the JavaScript standard).

(!) This is an outdated way and no one else does this:
```js
let animal = {
    eats: true
};

// create a new object with animal as a prototype
let rabbit.__proto__ = animal;
```

The modern methods are:
* Object.create(proto, [descriptors]) – creates an empty object with given proto as [[Prototype]] and optional property descriptors.
* Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj.
* Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto.  

These should be used instead of `__proto__`:  
```js
let animal = {
  eats: true
};

// create a new object with animal as a prototype
let rabbit = Object.create(animal);

alert(rabbit.eats); // true

alert(Object.getPrototypeOf(rabbit) === animal); // true

Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}
```

Object.create has an optional second argument: property descriptors. We can provide additional properties to the new object there, like this:
```js
let animal = {
  eats: true
};

let rabbit = Object.create(animal, {
  jumps: {
    value: true
  }
});

alert(rabbit.jumps); // true
```