**Constructor function**  
We need constructors to create new objects of the same type (new site users, store products, YouTube videos), that is, wherever there is templating.

Constructor functions are ordinary functions. But there are two conventions:
* The name of a constructor function must begin with a capital letter.
* The constructor function must be called using the "new" operator.

Constructors should be called using the new operator. Such a call creates an empty this at the beginning of execution and returns the filled one at the end.
```js
function User(name) {
  // this = {};  (implicitly)

  // adds properties to this
  this.name = name;
  this.isAdmin = false;

  // return this;  (implicitly)
}

const mariya = new User('Mariya');
```