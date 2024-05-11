// typeof

// What
// - The typeof operator in JavaScript is used to determine the data type of a value.

// Why
// - Understanding Code Behavior: Knowing the data type of a variable is crucial for writing predictable and correct code. typeof helps you ensure that variables are being used as intended and that operations are compatible with their data types.
// - Error Handling: You can use typeof in conditional statements to check for unexpected data types and handle errors gracefully. For example, a function might expect a number as input, and you can use typeof to check before performing calculations.
// - Debugging: typeof can be a valuable tool during debugging to inspect the data types of variables and identify potential issues

// How
const variableName = "value";
typeof variableName;

// Example
// Numbers (used for numeric values)
let age = 25;
console.log(typeof age); // Output: "number"

// Strings (used for text)
let name = "Alice";
console.log(typeof name); // Output: "string"

// Booleans (used for true or false values)
let isMember = true;
console.log(typeof isMember); // Output: "boolean"

// Arrays (used for ordered collections of items)
let fruits = ["apple", "banana", "orange"];
console.log(typeof fruits); // Output: "object" (limitation of typeof)
console.log(Array.isArray(fruits)); // Output: true (correct identification)

// Objects (used for key-value pairs to store data)
let person = {
  name: "Bob",
  age: 30,
  city: "New York",
};
console.log(typeof person); // Output: "object"

// Null (represents the intentional absence of a value)
let emptyVar = null;
console.log(typeof emptyVar); // Output: "object" (limitation of typeof)

// Undefined (indicates a variable has been declared but not yet assigned a value)
let undeclaredVar;
console.log(typeof undeclaredVar); // Output: "undefined"

// Symbol (a unique and immutable primitive value) - rarely used directly
let sym = Symbol("unique");
console.log(typeof sym); // Output: "symbol" (modern JavaScript feature)

// Pros
// - Easy to use - Just the variable name and typeof!
// - Understands many data types - Numbers, words, true/false, and more!
// - Helps catch errors early on - Makes sure you're using data the right way.

// Cons
// - Not perfect for all variables - Might say "object" for some collections (like lists).
// - Doesn't tell you everything - Doesn't reveal the exact content inside the variable, just the general type.

// Note
// - typeof is not perfect. It has it's limitation. You can see them in examples. 