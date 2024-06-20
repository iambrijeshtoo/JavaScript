// Object

// What is Object?
// - It is collection of properties and method.

// Example
// - In JavaScript there is Object Literal {}.
// - This means we are declaring literally an object.

const object = {
  // properties
  key: "value",

  // method
  method: function (parameter) {
    console.log(parameter);
  },
};

// Why we need object?
// - We need object to store data in proper way.
// - It is like creating box/ container to store the specific item inside it. So it easy to access them.

// How object work?
const user = {
  username: "test user",
  userId: "123",

  getUserName: function () {
    console.log(username); // It doesn't know which user are you talking about.
    console.log(this.username); // By using this it will refer to current object.
    // user.getUserName === this.username
  },
};

// Context/ Current Context 
// - When you are talking with your friend about some event that is host on MONDAY.
// - But you need to also clearly mention that which MONDAY are you talking about it was last week, current week or upcoming week.
// - This is the same for `this` keyword. It help to find the current context.
// - Suppose you have two object and both of them have same method. If you call the method how it going to check that which object's method are you trying to access.
// - By using `this` keyword you are telling that which MONDAY are you talking about. I mean which object you are trying to access.