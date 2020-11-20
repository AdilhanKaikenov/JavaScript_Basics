'use strict';

const person = {
    name: 'Alex',
    phone: '+123456789',
    parents: {
        mother: 'Olga',
        father: 'Mike'
    }
};

// For example, if this object needs to be transferred to the server and so that the server and data protocols can understand, 
// it must be converted into one of the options that can be transported

const personJson = JSON.stringify(person); // json
console.log(personJson); 

// The opposite situation is when json comes to us from the server and we need to turn it into an object in order to use

const personFromBackend = JSON.parse(personJson); // object
console.log(personFromBackend); 

// To deep clone an object we can do the following
const personClone = JSON.parse(JSON.stringify(person)); // completely independent clone of the object

