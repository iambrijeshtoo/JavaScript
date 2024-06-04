// Function VS Method

// - In JavaScript, methods are essentially functions that are defined as properties of an object or within a class. When a function is defined within an object or a class, it is referred to as a method.

// Function
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("John");

// Method inside object
let person = {
  name: "John",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

person.greet();

// Method inside class
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, ${this.name}!`);
  }
}

let person1 = new Person("John");
person1.greet();
