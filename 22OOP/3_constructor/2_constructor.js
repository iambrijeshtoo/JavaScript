// Constructor

// Q. What is Constructor?
// - The constructor method is a special method.
// - The constructor method is called automatically when a new object is created.
// - It has to have the exact name "constructor".
// - It is executed automatically when a new object is created.
// - It is used to initialize object properties.
// - If you do not define a constructor method, JavaScript will add an empty constructor method.

// NOTE
// - In JavaScript, if you do not provide a constructor function inside a class, a default constructor will be automatically created for you. This default constructor doesn't have any explicit code or parameters, but it still initializes the object created from the class.

class MyClass {
  constructor(para1, para2) {
    this.var1 = para1;
    this.var2 = para2;
  }
}

const obj = new MyClass("value1", "value2");
