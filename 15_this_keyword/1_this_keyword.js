// `this` Keyword

// What
// - In JavaScript, the this keyword refers to an current context.

// Note
// The this keyword refers to different objects depending on how it is used:
// 5. Arrow function and `this` keyword (Not Recommended) -> See the code example below
// 6. In a function with strict mode ("use strict") -> undefined
// TODO: In an event, this refers to the element that received the event.
// TODO: Methods like call(), apply(), and bind() can refer this to any object.

// 1. this -> Alone -> Global object
console.log(this);

// Regular function & `this` keyword

// 2. this -> In object method (regular function) -> Current Object
const object = {
  key: "value",
  method: function () {
    console.log(this);
    console.log(this.key);
  },
};
console.log(object.method());

// 3. this -> In regular function -> Global object
function regularFunction() {
  return console.log(this);
}
console.log(regularFunction());

// 4. this -> Function inside function -> Global object
function outerRegularFunction() {
  function innerRegularFunction() {
    return console.log(this);
  }
  console.log(innerRegularFunction());
}
console.log(outerRegularFunction());

// Arrow function & `this` keyword

// Note
// - Never use the arrow function inside method or constructor.

// 5. this -> In object method (arrow function) -> Global object
const object1 = {
  key: "value",
  method: () => {
    return console.log(this);
  },
};
console.log(object1.method());

// 6. this -> In arrow function -> Global object
const arrowFunction = () => {
  return console.log(this);
};
console.log(arrowFunction());

// 7. this -> Arrow function inside arrow function -> Global object
const outerArrowFunction = () => {
  const innerArrowFunction = () => {
    console.log(this);
  };
  console.log(innerArrowFunction());
};
console.log(outerArrowFunction());

// If you are thinking that. If `this` keyword is always refer to global object. Why can't we just rap the object around it. Then it will sure stop referring to global object.

const outerObject = {
  key1: "value",
  innerObject: {
    arrowFunction: () => {
      console.log(this.key1);
    },
  },
};
console.log(outerObject.innerObject.arrowFunction());
// `this` just doesn't care. It won't show the key1's -> value.
