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
let variable1 = 1;
let variable2 = 2;

// Multiple variable (same value)
let variable3, variable4, variable5; // First declare then initialize
variable3 = variable4 = variable5 = 1;

// Multiple variable (different value)
let variable6 = 1,
  variable7 = 2,
  variable8 = 3; // Declaring and initializing at the same time

// Pros
// - Flexibility: Variables allow us to store different types of data, like numbers, text, or lists.
// - Reusability: Once we store data in a variable, we can reuse it multiple times throughout our code.
// - Readability: Giving meaningful names to variables makes our code easier to understand.
