// Iterate object

const object = {
  key1: "Value1",
  key2: "Value2",
  key3: "Value3",
};

// # For in loop in objects
for (const key in object) {
  const element = object[key];
  // Print only value
  console.log(element);
  // Print key : value
  console.log(key, ":", object[key]);
}
