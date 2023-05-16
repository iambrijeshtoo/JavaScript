/* --------------------------- Object Iteration -------------------------- */

const object = {
  name_1: "value_1",
  name_2: "value_2",
  name_3: "value_3",
};

// For in loop (Recommended)
for (const name in object) {
  console.log(name); // Print the names
  console.log(object[name]); // Print the values
  console.log(name, ":", object[name]); // Print the names : values both
}