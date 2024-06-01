// Function Expression

// What
// - A way to define a function by assigning it to a variable.
// - Focuses on the assignment aspect.
// - It creates a function and assigns it a name (the variable name).

// Example

const myVariable = function (parameter1, parameter2) {
  return parameter1 + parameter2;
};

const myVariable2 = myVariable(1, 2); // Not a function expression. You are Calling the function and storing the return value only.
console.log(typeof myVariable);
