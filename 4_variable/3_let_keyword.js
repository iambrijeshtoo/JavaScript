// `let` Keyword

// Syntax
// let variableName = value;

// Initialized later
let variable;
variable = "value";

// Reassigned
let variable1 = "value1";
variable1 = "value2";

// Can't be redeclare
// let variable2 = "value1";
// let variable2 = "value2";

// Redeclare in different scope
let variable2 = "value"; // Declare in global scope

function myFunction(parameter) {
  let variable2 = "value"; // Redeclare in function scope
}

// Note
// - It can be initialized later.
// - It can be reassigned.
// - It can't be re-declare.
// - The let keyword is not hoisted, meaning it cannot be accessed before it is declared in the code.
// - The let keyword allows you to declare variables with the same name within different blocks, as long as they are in different scopes.

// When
// - Use let when you need to declare a variable with block scope.
// - Use let when you need to declare a variable that can be reassigned and re-declared within the same block.
// - Use let when you need to declare a variable that is only accessible within a specific block, such as inside a function or loop.