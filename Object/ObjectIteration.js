// Object Iteration

const object = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

// For in loop in objects
for (const key in object) {
  console.log(key);
  console.log(object[key]);
  console.log(key, ":", object[key]);
}

// For of loop in objects
for (const key of Object.keys(object)) {
  console.log(key);
  console.log(object[key]);
  console.log(key, ":", object[key]);
}

// Object.keys() method will return object keys in array format
console.log(Object.keys(object));
