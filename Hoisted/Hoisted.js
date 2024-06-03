// Hoisted

// Q. What is hoisted? (Not Recommended)
// - In Other programming languages you need to declare the variable first and then you need to initialize.

let var1; // Declaration
var1 = "value"; // Initialization

// - But in JavaScript a variable can be used before it has been declared.

var2 = "value"; // Initialization
console.log(var2); // Used without declaration
var var2; // Declaration

// This kind of behavior known as hoisting.

// [NOTE]
// - This will not work for let, const and for class. It only work for var and function keyword.
// - Watch this - https://youtu.be/EvfRXyKa_GI

// DECLARE YOUR VARIABLES AT THE TOP !
