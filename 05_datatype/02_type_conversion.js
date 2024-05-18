// Type Conversion (Datatype Conversion)

// Numbers

// WHY
// - When we are fetching data from server sometimes data will have some numbers value. But the numbers are in string format for e.g. "999". At that time convert this to pure number 999 we need to use type conversion.

// HOW
// - Number(): Use this function to convert string formatted number to pure number "999" to 999.
// - parseFloat(): Use this function to convert string formatted floating number to floating number e.g. "3.14" to 3.14
// - parseInt(): Use this function to convert string formatted integer number to integer number e.g. "3.14" to 3 .

// NOTE
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

const variable1 = 100;
const convertToNumber = Number(variable1);
console.log(typeof convertToNumber);
console.log(convertToNumber);

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
const variable2 = undefined;
const convertToString = String(variable2);
console.log(typeof convertToString);
console.log(convertToString);

// Boolean

// Note
// 1 => true
// 0 => false
// "abc" => true
// "" => false
// null => false
// undefine => false

// Example
const variable3 = 1;
const convertToBoolean = Boolean(variable1);
console.log(typeof convertToNumber);
console.log(convertToNumber);
