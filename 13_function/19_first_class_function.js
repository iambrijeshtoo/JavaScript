// First Class Function

// Q. What is First Class Function?
// - In JavaScript, functions are considered "first-class" citizens, It means they can be treated just like any other value.

// Functions can be assigned to variables
const variable = function () {
  console.log("Hello World");
};

// Functions can be stored in data structures
const variable1 = variable;
variable1();

// Functions can be passed as arguments to other functions
function function1() {
  console.log("Hello World");
}

function function2(function1) {
  function1();
}

// Functions can be returned as values from other functions
function function3() {
  return function function4() {
    console.log("Hello World");
  };
}

// Functions can be defined inside other functions (nested functions or closures)
function outerFunction() {
  function innerFunction() {
    console.log("Hello World, I'm Inner function");
  }
  innerFunction(); // invoking the nested function
}
outerFunction();

// Functions can be invoked immediately (immediately invoked function expressions)
(function () {
  console.log("Hello World");
})();
