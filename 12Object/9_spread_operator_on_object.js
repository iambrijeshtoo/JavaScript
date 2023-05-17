/* ------------------------ Spread Operator On Object ----------------------- */

// [NOTE]
// - When both objects has same name_ but values are different and you combine them together to make one object.At that time even if the name_s are same but value will be consider(taken) from the only last object. Because even though both have same name_ but latest update value will be considered from the last object.

const object_1 = {
  name_1: "value_1",
  name_2: "value_2",
  name_3: "value_3",
  same_name: "same_value1",
};

const object_2 = {
  name_4: "value_4",
  name_5: "value_5",
  name_6: "value_6",
  same_name: "same_value2",
};

// Add both objects into the new object
const object_3 = { ...object_1, ...object_2 };
console.log(object_3);

// Add both objects into the one new object and adding name : value pair
const object_4 = { ...object_1, ...object_2, name_7: "value_7" };

// When array is added into the object at that time array index will be name and element will be value
const arr = [1, 2, 3];
const object_5 = {
  ...arr,
};
console.log(object_5);
