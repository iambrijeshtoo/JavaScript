// `this` Keyword

// Q. What is this keyword?
// - In JavaScript, the this keyword refers to an object.

// NOTE
// - The this keyword refers to different objects depending on how it is used:
// - Alone, this refers to the global object.
// - In an object method, this refers to the object.
// - In a function, this refers to the global object.
// - In a function, in strict mode, this is undefined.
// - In an event, this refers to the element that received the event.
// - Methods like call(), apply(), and bind() can refer this to any object.

// `this` in a method refer to current object
const obj1 = {
  name1: "Value1",
  name2: "Value2",
  name3: function () {
    console.log(this.name1);
  },
};
obj1.name3();

// `this` alone refer to global object
console.log(this);

// `this` in a function refer to global object
function fun() {
  return this;
}

// `this` in a function when strict mode on it's undefine
function fun1() {
  return this;
}
