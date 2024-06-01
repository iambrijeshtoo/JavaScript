// Type Of Datatype

// Note
// - JavaScript is dynamic language so that we don't need to specify each and every datatype. It will dynamically set the datatype according the the variable's value.

// Primitive datatype

// Number
let myInteger = 123;
let myFloat = 3.14;
let myDouble = 99.99;
let myScientificNumber = 10e2;

// NOTE: BigInt numbers can only perform operation with BigInt datatype
let myBigInt1 = BigInt(1000); // Creating BigInt number using BigInt() constructor
let myBigInt2 = 1000n; // Creating BigInt number using `n` at the end of the number

// String
let myString1 = `Backtick`;
let myString2 = "Single quote";
let myString3 = "Double quote";

// Boolean
let myBoolean1 = true;
let myBoolean2 = false;

// Symbol
const mySymbol = Symbol();

// Traditional Datatype: numbers, string & boolean
// Standalone value: undefined, null, empty string `""`

// Undefined
let myUndefined1 = undefined;
let myUndefined2; // Declared variable which doesn't assigned any value yet also has undefined value.

// Null
// Note
// - Null is standalone value. To understand this let say you are creating weather application which give you the temperature of selected city. For any reason server unable to send you the temperature that means there is no temperature value. At that case weather app shouldn't show `0` on screen. Because 0 also refer as temperature value. At that time we use null to show there is actually no temperature and server are unable to fetch data of temperature.
// - WHEN CHECK THE TYPEOF NULL IT WILL SHOW IT IS AN OBJECT.
let myNull = null;

// Empty value
let myEmptyValue = "";

// Non-Primitive Data Types (Reference, Complex)

// Object
const myObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

// Array
let myArray = [value1, value2, value3];

// Function
function myFunction(parameter) {
  return parameter;
}
