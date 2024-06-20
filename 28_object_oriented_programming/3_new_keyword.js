// `new` Keyword

// What is `new` Keyword?
// - In JavaScript, the new keyword is used to create an instance of an object or to invoke a constructor function.

// Why we need `new` keyword?
// - If you create a new instance without the `new` keyword it will update the value of previously created instance.

// How the `new` keyword work?
// TODO: Comeback later when you finished to proto and prototype
// - When used with a constructor function, it performs the following steps:

// 1. Creates a new empty object `{}`.
// 2. Binds the newly created object as the `this` keyword within the constructor function.
// - Sets the prototype of the newly created object to the prototype property of the constructor function.
// - Executes the constructor function, which initializes the newly created object with properties and methods.
// - Returns the newly created object.  

function User(username, userID, userEmail) {
  this.username = username;
  this.userID = userID;
  this.userEmail = userEmail;

  this.getUsername = function () {
    console.log(this.username);
  };
  return this;
}

const userOne = new User("user1", "123", "abc@xyz.com");
const userTwo = new User("user2", "456", "efg@xyz.com");

// userTwo will overwrite the values of userOne. To avoid this and create separate new instance we need to use `new` keyword.
console.log(userOne);
console.log(userTwo);
