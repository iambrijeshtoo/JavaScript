/* ----------------------------- Object Cloning ----------------------------- */

// [Note]
// - When we clone the object and assign it to another object after that if we made any changes to original object it doesn't effect to the cloned

const object_1 = {
  name_1: "value_1",
  name_2: "value_2",
  name_3: "value_3",
};

// Clone object using spread operator
const object_2 = { ...object_1 };
console.log(object_2);

// Q. What is Object.assign()?
// - It is use to copying object and assign to another object.
// - The Object.assign() method in JavaScript is used to copy the values of all enumerable properties from one or more source objects to a target object. It merges the properties of the source objects into the target object.

// [SYNTAX]
// Object.assign(target_object, ...source_object);

const object3 = Object.assign({}, object_1);
console.log(object3);
