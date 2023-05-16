/* -------------------------- Single Object Destructure ------------------------- */

// Manually object destructure
const object_1 = {
  name_1: "value_1",
  name_2: "value_2",
  name_3: "value_3",
};
const variable_1 = object_1.name_1;
const variable_2 = object_1.name_2;
const variable_3 = object_1.name_3;
console.log(variable_1);
console.log(variable_2);
console.log(variable_3);

// Easily object destructure
const object_2 = {
  name_4: "value_4",
  name_5: "value_5",
  name_6: "value_6",
};
const { variable_4, variable_5, variable_6 } = object_2;
console.log(variable_4);
console.log(variable_5);
console.log(variable_6);

// Create new object from the existing object use spread operator
const { ...object_3 } = object_2;
console.log(object_3);
