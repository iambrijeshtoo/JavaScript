// Function Are Object

// Q. What is function are object?
// - When you use `typeof` operator to the datatype of function you will get function back. But internally function are work same as an object. It has method and property same as an object has.

// NOTE
// - To see function as a object use
// console.dir(function_name);

// To remove the confusion between function and object here the example

// Object
let object = {
  key: "value",
};

console.log(object.key); // Accessing key/ value

object.key_1 = "value_1"; // Adding key/ value
console.log(object);

// Function
function function_() {
  console.log("Hello, World!");
}
console.log(function_.length);
console.log(function_.name);
console.log(function_.toString());
