/* ---------------------------- Function As Value --------------------------- */

// Function expression (Look at the variable color is like function and function is anonymous)
let variable = function () {
  console.log("Hello, World!");
};

// Function stored as a variable's value
function sum(a, b) {
  return a + b;
}
let variable_1 = sum(1, 2);
console.log(variable_1);

// Function can be also used with expression
let variable_2 = sum(1, 2) + 3;
console.log(variable_2);