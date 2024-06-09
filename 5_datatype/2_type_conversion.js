// Type Conversion (Datatype Conversion)

// Numbers

// What
// - Type conversion in JavaScript is the process of changing a value from one data type to another. This can happen automatically (called implicit conversion) or manually (called explicit conversion).

// Why
// - When we are fetching data from server sometimes data will have some numbers value. But the numbers are in string format for e.g. "999". At that time convert this to pure number 999 we need to use type conversion.

// How
// - Number(): Use this constructor to convert string formatted number to pure number "999" to 999.
// - parseFloat(): Use this method to convert string formatted floating number to floating number e.g. "3.14" to 3.14
// - parseInt(): Use this method to convert string formatted integer number to integer number e.g. "3.14" to 3 .

// Note

// Numbers
// "100" => 100
// "abc" => NaN
// "100abc" => NaN
// true => 1
// false => 0
// "" => 0
// null => 0
// undefine => NaN

// Example
console.log(parseFloat("3.14"));
console.log(parseInt("3.14"));

const myVariable = null;
const convertToNumber = Number(myVariable);

console.log(convertToNumber);
console.log(typeof convertToNumber);

// Strings

// Note
// 100 => "100"
// "abc" => "abc"
// "100abc" => "100abc"
// true => "true"
// false => "false"
// null => "null"
// undefine => "undefine"

// Example
const myVariable2 = undefined;
const convertToString = String(myVariable2);

console.log(convertToString);
console.log(typeof convertToString);

// Boolean

// Note
// 1 => true
// 0 => false
// "abc" => true
// "" => false
// null => false
// undefine => false

// Example
const myVariable3 = 1;
const convertToBoolean = Boolean(myVariable);

console.log(convertToNumber);
console.log(typeof convertToNumber);
