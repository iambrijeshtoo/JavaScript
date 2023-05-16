/* --------------------------------- Object -------------------------------- */

// Q. What is Object?
// - Object is variable too. But it store more than one value. It store values in "name : value" pair. In object you can store numbers, strings, boolean values, variables, array, function and nested objects also.

// Q. What is primitive?
// - Everything in JavaScript is object expect primitive.
// - A primitive value is a value that has no properties or methods.
// - Primitive value are immutable.
// - e.g. string, number, boolean, null, undefined, symbol, BigInt.

// [NOTE]
// - It is common practice to declare objects with const.
// - Object are mutable they are address by the reference not by value.

// [Syntax]
// const object = {
//  name1: "value1",
//  name2: "value2",
//  name3: "value3",
// };

// Creating object using object literal
const object = {
  string: "Student1",
  number: 1,
  boolean: true,
  array: ["Math", "Science", "English"],
  object: {
    name_1: "value_1",
    name_2: "value_2",
    name_3: "value_3",
  },
  function_: function () {
    console.log("Hello, World!");
  },
};

// Creating empty object add name : value
const object_1 = {};
object_1.name_1 = "value_1";
object_1.name_2 = "value_2";
object_1.name_3 = "value_3";

// Creating object using constructor (Not Recommended)
const object_2 = new Object();
object_2.name_1 = "value_1";
object_2.name_2 = "value_2";
object_2.name_3 = "value_3";
