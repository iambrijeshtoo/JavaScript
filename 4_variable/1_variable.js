// Variable

// What
// - Variables in JavaScript are like containers where you can store information. This information can be numbers, text, lists, or even more complex data.

// Why
// - Variables are used to keep track of data that we want to use or change in our programs. They help us store values temporarily and reuse them later in our code.

// Note
// - To create variable you can use var, let and const keyword.
// - `var` keyword has been deprecated so it's not recommended to use. Only use `let` and `const`.

// Syntax
// Single variable
var variable = 0; // Not Recommended
let variable1 = 1;
const variable2 = 2;

// Multiple variable with same value
// - First declare then initialize
let variable3, variable4, variable5;
variable3 = variable4 = variable5 = 1;

// Multiple variable with different value
// - Declaring and initializing at the same time
// - Use comma to separate the variable
let variable6 = 1,
  variable7 = 2,
  variable8 = 3;
