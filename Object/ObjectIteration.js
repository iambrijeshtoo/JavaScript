// Object Iteration

const object = {
  key1: "Value1",
  key2: "Value2",
  key3: "Value3",
};

// # For in loop in objects
for (const key in object) {
  console.log(key); // Print key only
  console.log(object[key]); // Print value only
  console.log(key, ":", object[key]); // Print key & value
}

/*
  # Object key method

  ## Syntax:
  Object.key(objectsName);

  !Note:
  - This method will gives object keys in array format.
*/

console.log(Object.keys(object));

//  # For of loop in objects
for (const key of Object.keys(object)) {
  console.log(key);
  console.log(object[key]);
  console.log(key, ":", object[key]);
}