// Object Computed Properties

const key1 = "key1";
const key2 = "key2";
const key3 = "key3";
const value1 = "Value1";
const value2 = "Value2";
const value3 = "Value3";

// Directly put variable name inside the object
const object = {
  [key1]: value1,
  [key2]: value2,
  [key3]: value3,
};
console.log(object);

// Manually assignee key to object and then assign value
const object1 = {};
object1[key1] = value1;
object1[key2] = value2;
object1[key3] = value3;
console.log(object1);
