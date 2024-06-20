// Factory Function

// Q. What is Factory Function?
// - A factory function is a function that is used to create and return objects. It is a design pattern that provides a way to create multiple objects with similar properties and behaviors, without the need for using classes or constructors.

// NOTE
// - It doesn't use class, constructor or new keyword. It just simple function which use to create object.

// EXAMPLE

function factoryFunction(parameter1, parameter2) {
  return {
    key1: parameter1,
    key2: parameter2,
    function1: function () {
      console.log(this.key1, this.key2);
    },
  };
}

var object = factoryFunction("John", 25);

object.function1();
