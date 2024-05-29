// Object Property

// Q. What is object property?
// - A JavaScript object is a collection of unordered properties.

// Q. What is property?
// - `name : "value"` pair which stored in object known as a property.

const mainObject = {
  name1: "value1",
  name2: "value2",
  name3: "value3",
};

// Accessing property
mainObject.name1;
mainObject["name1"];

// Adding new property
mainObject.name4 = "value4";

// Deleting property
delete mainObject.name1;
delete mainObject["name1"];
