// Class

// Q. What is Class?
// - JavaScript Classes are templates for JavaScript Objects.

// NOTE
// - Always add a method named constructor();

// SYNTAX
// class ClassName{
//  constructor(){}
// }

class MyClass {
  constructor(para1, para2) {
    this.var1 = para1;
    this.var2 = para2;
  }
}

const obj1 = new MyClass("value1", "value2");
const obj2 = new MyClass("value1", "value2");
