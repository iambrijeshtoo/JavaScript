// Call Back Function

// Q. What is Call Back Function?
// - "It will call later"
// - A callback is a function passed as an argument to another function. This technique allows a function to call another function.

// NOTE
// - JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.

function fun(name, callback) {
  console.log("Hello, " + name + "!");
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

fun("Alice", sayGoodbye);
