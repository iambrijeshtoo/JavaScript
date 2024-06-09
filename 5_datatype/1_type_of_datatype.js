// Type Of Datatype

// Note
// - JavaScript is dynamic language so that we don't need to specify each and every datatype. It will dynamically set the datatype according the the variable's value.
// - Note that undefined, null, empty string `""` and NaN known as Standalone value.

// Primitive datatype

// Number
let integer = 123;
let float = 3.14;
let double = 99.99;
let scientificNumber = 10e2;

// NOTE: BigInt numbers can only perform operation with BigInt datatype
let bigInt1 = BigInt(1000); // Creating BigInt number using BigInt() constructor
let bigInt2 = 1000n; // Creating BigInt number using `n` at the end of the number

// String
let string1 = `Backtick`;
let string2 = "Single quote";
let string3 = "Double quote";

// Boolean
let boolean1 = true;
let boolean2 = false;

// Symbol
const symbol = Symbol();

// Undefined
let undefined1 = undefined;
let undefined2; // Declared variable which doesn't assigned any value yet also has undefined value.

// Null
// Note
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
const array = [value1, value2, value3];

// Function
function myFunction(parameter) {
  return parameter;
}
