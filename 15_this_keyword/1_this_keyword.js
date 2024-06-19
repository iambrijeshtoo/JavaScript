// `this` Keyword

// What
// - "this" keyword refers to an object that is executing the current piece of code. It references the object that is executing the current function.

// Note
// The this keyword refers to different objects depending on how it is used:

// 1. this -> Alone -> Global Object

// 2. this -> In Regular Function -> Global Object/ Strict Mode: Undefine
// 3. this -> Regular Function Inside Regular Function -> Global Object/ Strict Mode: Undefine
// 4. this -> In Object Method (Method is Regular Function) -> Current Object

// 5. this -> In Arrow Function -> Global Object
// 6. this -> Arrow Function Inside Arrow Function -> Global object
// 7. this -> In Object Method (Method is Arrow Function) -> Global Object

// TODO: In an event, this refers to the element that received the event.
// TODO: Methods like call(), apply(), and bind() can refer this to any object.

// 1. this -> Alone -> Global Object
// - If `this` keyword use in global scope it will refer to the global object.
console.log(this);

// REGULAR FUNCTION & `THIS` KEYWORD

// 2. this -> In Regular Function -> Global Object
// - If `this` keyword use inside the regular function it will refer to global object.
function regularFunction() {
  return console.log(this);
}
console.log(regularFunction());

// 3. this -> Regular Function Inside Regular Function -> Global Object
// - If `this` keyword use inside the regular function. Which also wrap with the regular function. It will refer to global object.
function outerRegularFunction() {
  function innerRegularFunction() {
    return console.log(this);
  }
  console.log(innerRegularFunction());
}
console.log(outerRegularFunction());

// 4. this -> In Object Method (Method is Regular Function) -> Current Object
// - If `this` keyword use inside the object's method which is regular function it will refer to the object it self.
const object = {
  key: "value",
  method: function () {
    console.log(this);
    console.log(this.key);
  },
};
console.log(object.method());

// ARROW FUNCTION & `THIS` KEYWORD

// Note
// - Arrow functions are a special type of function in JavaScript. One key characteristic of arrow functions is that they do not have their own this context. Instead, they inherit this from the surrounding code where they are defined.

// 5. this -> In Arrow Function -> Global Object
// - If `this` keyword use inside the arrow function it will refer to global object.
const arrowFunction = () => {
  return console.log(this);
};
console.log(arrowFunction());

// 6. this -> Arrow Function Inside Arrow Function -> Global object
// - If `this` keyword use inside the arrow function. Which also wrap with the arrow function. It will refer to global object.
const outerArrowFunction = () => {
  const innerArrowFunction = () => {
    console.log(this);
  };
  console.log(innerArrowFunction());
};
console.log(outerArrowFunction());

// 7. this -> In Object Method (Method is Arrow Function) -> Global Object
// - If you use `this` keyword inside the method which also inside the object. It will refer to global object.
const object1 = {
  key: "value",
  method: () => {
    return console.log(this);
  },
};
console.log(object1.method());

// 8. Arrow function always refer to global object
// - If you are thinking that.If `this` keyword is always refer to global object for arrow function. Why can't we just rap the object around it. Then it will sure stop referring to global object and show the wrap object.
const outerObject = {
  key: "value",
  innerObject: {
    arrowFunction: () => {
      console.log(this.key1);
    },
  },
};
console.log(outerObject.innerObject.arrowFunction());
// `this` just doesn't care. It won't show the key's -> value.

// TODO: Complete the @chaiaurcode playlist about this topic and comeback letter
// Constructor Call
// When using new, this refers to the newly created instance.
function Person(name) {
  this.name = name;
}
const person1 = new Person("Alice");
console.log(person1.name); // this refers to the new Person instance, person1.


