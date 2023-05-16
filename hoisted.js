/* --------------------------------- Hoisted -------------------------------- */

// Q. What is hoisted? (Not Recommended)
// - In Other programming languages you need to declare the variable first and then you need to initialize.

let variable; // Declaration
variable = "value"; // Initialization

// - But in JavaScript a variable can be used before it has been declared.

variable_1 = "value"; // Initialization
console.log(variable_1); // Used without declaration
var variable_1; // Declaration

// This kind of behavior known as hoisting.

// [NOTE]
// - This will not work for let and const. It only work for var and function keyword.
// - Watch this - https://youtu.be/EvfRXyKa_GI

/* -------------------------------------------------------------------------- */
/*                      DECLARE YOUR VARIABLES AT THE TOP !                   */
/* -------------------------------------------------------------------------- */
