// Class

// Q. What is Class?
// - JavaScript Classes are templates for JavaScript Objects.

// NOTE
// - Class in JavaScript doesn't work like other programming language. It's just a syntactic sugar which look like we are using class but in the background it is using function constructor and prototype inheritance.
// - Always add a method named constructor();
// - Class can't be hoisted.
// - Class are first class citizen just like first class function.

// SYNTAX
// class ClassName{
//  constructor(){}
// }

// 1. Creating class using `class` keyword
class MyClass {
  constructor(para1, para2) {
    this.var1 = para1;
    this.var2 = para2;
  }
}

const obj1 = new MyClass("value1", "value2");
const obj2 = new MyClass("value1", "value2");

// 2. Creating class with class expression

let variable = class {
  constructor() {}
};
