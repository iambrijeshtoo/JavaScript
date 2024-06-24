// Type Of Datatype

// What
// - Data types in JavaScript are the different types of values that can be stored and manipulated in a program.
// - They define the kind of data that a variable can hold and the operations that can be performed on that data.

// Why
// - Data types help ensure that your program behaves correctly and handles different types of data appropriately.
// - They provide a foundation for writing robust and maintainable code.

// How
// - JavaScript has a set of built-in data types that define the kind of values that can be stored and manipulated in a program. These data types include:
// - Number: Represents numeric values, including integers and floating-point numbers.
// - String: Represents textual data, enclosed in quotes.
// - Boolean: Represents logical values, which can be either true or false.
// - Object: Represents complex data structures, such as arrays, functions, and custom objects.
// - Undefined: Represents a variable that has not been assigned a value.
// - Null: Represents a variable that has been explicitly assigned a value of null.

// Undefined
// - You can assign literally a value as a `undefined`
let undefined1 = undefined;
// - Declared variable which doesn't assigned any value yet also has undefined as a value.
let undefined2;

// Null
// - Null is standalone value. To understand this let say you are creating weather application which give you the temperature of selected city. For any reason server unable to send you the temperature that means there is no temperature value. At that case weather app shouldn't show `0` on screen. Because 0 also refer as temperature value. At that time we use null to show there is actually no temperature and server are unable to fetch data of temperature.
// - WHEN CHECK THE TYPEOF NULL IT WILL SHOW IT IS AN OBJECT.
let myNull = null;

// Non-Primitive Data Types (Reference, Complex)

// Object
const object = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

// Array
const array = [1, 2, 3, 4, 5];

// Function
function myFunction(parameter) {
  return parameter;
}
    