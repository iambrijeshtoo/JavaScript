/* ---------------------------- Object Property ---------------------------- */

// Q. What is object property?
// - A JavaScript object is a collection of unordered properties.

// Q. What is property?
// - `name : "value"` pair which stored in object known as a property.

const object = {
  name_1: "value_1",
  name_2: "value_2",
  name_3: "value_3",
};

object.name_1; // Accessing property
object["name_1"]; // Accessing property
object.name_4 = "value_4"; // Adding new property
delete object.name_1; // Deleting property
delete object["name_1"]; // Deleting property
