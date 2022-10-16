// Topic: String Conversion

// # What is String Conversion?
// - To change String to number and number to String.

// # Why use String Conversion?
// - In some case you have to display number as String.

// # How to use String Conversion?

// ## Method 1: Number to String
let number = 99;
number = String(99);
console.log(typeof number);

// ### Shortcut: Number to String
let number1 = 99 + "";
console.log(typeof number); 

// ## Method 2: String to Number
let name = "007";
name = Number(name);
console.log(typeof name);

// ### Shortcut: String to Number.
let name1 = + "007";
console.log(typeof name);