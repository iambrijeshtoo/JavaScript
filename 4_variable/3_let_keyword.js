// Let Keyword

// Note
// - It can be initialized later.
// - It can be reassigned.
// - It can't be redeclare.
// - It can be redeclare but in different scope.
// - It has block scope

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
