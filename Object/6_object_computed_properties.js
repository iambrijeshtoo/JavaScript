/* ---------------------- Object Computed Properties --------------------- */

// Q. What is object computed properties?
// - n JavaScript, computed properties, also known as computed property names or computed object property names, allow you to dynamically define property names of an object using an expression inside square brackets ([]). The expression is evaluated at runtime, and its result is used as the property name.

// Variable which are going to add as name : value in object.
const name_1 = "name_1";
const name_2 = "name_2";
const name_3 = "name_3";
const value1 = "Value1";
const value2 = "Value2";
const value3 = "Value3";

// Directly put variable name inside the object
const object = {
  [name_1]: value1,
  [name_2]: value2,
  [name_3]: value3,
};
console.log(object);

// Manually assignee name_ to object and then assign value
const object_1 = {};
object_1[name_1] = value1;
object_1[name_2] = value2;
object_1[name_3] = value3;
console.log(object_1);
