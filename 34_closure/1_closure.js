// Closure

// Resource
// Video: https://youtu.be/VaH09NXQZ58?si=3WqYcXBnA3LW5ZAt

// What
// -> When a function is defined inside another function (the outer function), the inner function has access to the outer function's variables, including its parameters and variables declared within it. This relationship forms a closure

// Why
// -> Encapsulation: Allows variables to be hidden and only accessed through defined functions.
// -> Data Privacy: Enables creating private variables and methods that are not accessible from outside.
// -> Function Factories: Facilitates creating functions that can remember and access variables from their lexical scope.

// Example
function outerFunction() {
  const outerVariable = "value";

  function innerFunction1() {
    const innerVariable = "value";
    console.log(outerVariable);
  }

  function innerFunction2() {
    console.log(innerVariable);
  }

  innerFunction1();
  innerFunction2();
}

outerFunction();

// Note
// -> Closures are commonly used for maintaining state in event handlers, callbacks, and module patterns.
// -> They allow functions to access and manipulate private variables that cannot be accessed directly from outside the function.
