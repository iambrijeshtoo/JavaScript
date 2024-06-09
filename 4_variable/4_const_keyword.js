// Const Keyword

// What
// - The const keyword is use to create constant.

// When
// - Always declare a variable with const when you know that the value should not be changed.
// Use const when you declare:
// A new Array
// A new Object
// A new Function
// A new RegExp

// Note
// - It can only initialized when it's declared.
// - It can't be reassigned.
// - It can't be redeclare.
// - It can be redeclare but in different scope.

// Syntax
// const constantName = value;

// Initialize & declare at the same time
const constant = "value";

// Can't be redeclare
// const constant = "value1";
// const constant = "value2";

// Can't be reassigned
// const constant = "value1";
// constant = "value2";

// Redeclare in different scope
const variable2 = "value"; // Declare in global scope

function myFunction(parameter) {
  const variable2 = "value"; // Redeclare in function scope
}

// Constant Objects and Arrays
// - The keyword const is a little misleading.
// - It does not define a constant value. It defines a constant reference to a value.

// Because of this you can NOT:
// - Reassign a constant value
// - Reassign a constant array
// - Reassign a constant object

// But you CAN:
// - Change the elements of constant array
// - Change the properties of constant object