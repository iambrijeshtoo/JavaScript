/* ------------------------- Function Expression ------------------------- */

// Q. What is function expression?
// - Storing function inside the variable

// [NOTE]
// - Function stored inside an variable known as a anonymous function.

const variable = function (parameter_1, parameter_2) {
  return parameter_1 + parameter_2;
};

let answer = variable(1, 2);
console.log(typeof answer);
