**Json format**  
JSON (JavaScript Object Notation) is a textual data exchange format based on JavaScript. Like many other text formats, JSON is easy to read by humans.  
It is used not only for transmission but also for data storage. It originally appeared in javaScript but today it can be used by almost any programming language.  
Json is just key-value pairs and the main rule is that all strings must be in double quotes. The values can be objects, arrays, numbers, strings, booleans, or null.  
```json
{
   "firstName": "Иван",
   "lastName": "Иванов",
   "address": {
       "streetAddress": "Московское ш., 101, кв.101",
       "city": "Ленинград",
       "postalCode": 101101
   },
   "phoneNumbers": [
       "812 123-1234",
       "916 123-4567"
   ]
}
```

For example, if this object needs to be transferred to the server and so that the server and data protocols can understand, it must be converted into one of the options that can be transport:
```js
'use strict';

const person = {
    name: 'Alex',
    phone: '+123456789',
    parents: {
        mother: 'Olga',
        father: 'Mike'
    }
};

const personJson = JSON.stringify(person); // json
console.log(personJson); 
```

The opposite situation is when json comes to us from the server and we need to turn it into an object in order to use:
```js
'use strict';

const person = JSON.parse(personJson); // object
console.log(person); 
```

To deep clone an object we can do the following: 
```js
'use strict';

const person = {
    name: 'Alex',
    phone: '+123456789',
    parents: {
        mother: 'Olga',
        father: 'Mike'
    }
};

const personClone = JSON.parse(JSON.stringify(person)); // completely independent clone of the object
```