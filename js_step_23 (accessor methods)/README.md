**Properties - getters and setters**  
There are two types of object properties.

1) The first type is data properties.
2) The second type is accessor properties. At their core, these are functions that are used to set and get a value, but in external code they look like ordinary properties of an object.

The getter fires when obj.propName is read, the setter fires when a value is assigned.
```js
let obj = {
  get propName() {
    // getter, triggered when reading obj.propName
  },

  set propName(value) {
    // setter, triggered when writing obj.propName = value
  }
};
```

```js
let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  }

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};

alert(user.fullName); // John Smith

// set fullName 
user.fullName = "Alice Cooper";

alert(user.name); // Alice
alert(user.surname); // Cooper
```