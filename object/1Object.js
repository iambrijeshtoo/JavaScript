// Object

// Q. What is Object?
// - Object is variable too. But it store more than one value. It store values in "name : value" pair. In object you can store numbers, strings, boolean values, variables, array, function and nested objects also.

// Q. What is primitive?
// - Everything in JavaScript is object expect primitive.
// - A primitive value is a value that has no properties or methods.
// - Primitive value are immutable.
// - e.g. string, number, boolean, null, undefined, symbol, BigInt.

// NOTE
// - It is common practice to declare objects with const.
// - Object are mutable they are address by the reference not by value.

// SYNTAX
// const object = {
//  name1: "value1",
//  name2: "value2",
//  name3: "value3",
// };

// Creating object using object literal
const mainObject = {
  string: "Hello, World!",
  number: 123,
  boolean: true,
  array: [1, 2, 3, 4, 5],
  object: {
    name1: "value1",
    name2: "value2",
    name3: "value3",
  },
  function1: function () {
    console.log("Hello, World!");
  },
};

// Creating empty object add name : value
const object1 = {};
object1.name1 = "value1";
object1.name2 = "value2";
object1.name3 = "value3";

// Creating object using constructor (Not Recommended)
const object2 = new Object();
object2.name1 = "value1";
object2.name2 = "value2";
object2.name3 = "value3";
