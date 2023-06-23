// `static` Keyword

// Q. What is `static` Keyword?
// - In JavaScript, the static keyword is used to define static methods and static properties in a class. Static members are associated with the class itself rather than instances of the class. They are accessible directly on the class itself, without the need to create an instance of the class.

// Creating static variable and method for class
class MyClass {
  static variable = "I am static variable";

  static function1() {
    console.log("I am static method");
  }
}

console.log(MyClass.variable);
MyClass.function1();

// Creating static variable and method for object
const object = {
  key: "value",
};

object.function2 = function () {
  console.log("I am static method");
};
