// Type Of Datatype

// Note
// - JavaScript is dynamic language so that we don't need to specify each and every datatype. It will dynamically set the datatype according the the variable's value.

// Primitive datatype

// Number
let int = 123;
let float = 3.14;
let double = 99.99;
let scientificNumber = 10e2;
// NOTE: BigInt numbers can only perform operation with BigInt datatype
let bigInt1 = BigInt(1000); // Creating BigInt number using function
let bigInt2 = 1000n; // Creating BigInt number using `n` at the end of the number

// String
let string1 = `Backtick`;
let string2 = "Single quote";
let string3 = "Double quote";

// Boolean
let boolean1 = true;
let boolean2 = false;

// Undefined
let myUndefined1 = undefined;
let myUndefined2; // Declared variable which doesn't assigned any value also has undefined value.

// Null
// NOTE
// - Null is standalone value. To understand this let say you are creating weather application which give you the temperature of selected city. For any reason server unable to send you the temperature that means there is no temperature value. At that case weather app shouldn't show `0` on screen. Because 0 also refer as temperature value. At that time we use null to show there is actually no temperature and server are unable to fetch data of temperature.
// - When check the typeof null it will show it is an object.
let myNull = null;

// Empty value
let emptyValue = "";

// Symbol
const mySymbol = Symbol();

// Complex Datatype

// Object
const object = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

// Array
let array = [value1, value2, value3];

// Function
function functionName(parameter) {
  return parameter;
}
