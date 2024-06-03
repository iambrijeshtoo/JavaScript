// `this` Keyword

// What
// - In JavaScript, the this keyword refers to an current context.

// Note
// - The this keyword refers to different objects depending on how it is used:
// 1. Alone -> Global object
// 2. In a object method -> object
// 3. In a function -> Global object
// 4. In a function with strict mode ("use strict") -> undefined
// - In an event, this refers to the element that received the event.
// - Methods like call(), apply(), and bind() can refer this to any object.

// 1. Alone -> Global object
console.log(this);

// 2. In a object method -> object
const object = {
  key1: "Value1",
  key2: "Value2",
  key3: function () {
    console.log(this.key1);
  },
};
console.log(object.key3());

// 3. In a function -> Global object
function iAmFunction() {
  return console.log(this);
}

console.log(iAmFunction());

// 4. Function inside function -> Global object
function iAmOutsideFunction() {
  function iAmInsideFunction() {
    return console.log(this);
  }
  console.log(iAmInsideFunction());
}
console.log(iAmOutsideFunction());

// 5. Arrow function and this keyword
// - Arrow functions have a different behavior with this. They inherit the this value from the enclosing scope where they are defined, not from how they are called.

// Defined in the Global Scope -> Global object
const arrowFunction = () => {
  return console.log(this);
};
console.log(arrowFunction());

// Defined Inside a Function or Object
const object1 = {
  key1: "value1",
  key2: "value2",
  key3: () => {
    console.log(this);
  },
};

console.log(object1.key3());
