// Objects

const object = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};
console.log(object);

// Accessing values from the object
console.log(object.key1);
console.log(object.key2);
console.log(object.key3);

// Adding key and value pair in object
// Using dot operator
object.key4 = "value4";
console.log(object);

// Using bracket (When your key name has whitespace)
object["key5"] = "value5";
console.log(object);

// Accessing key name from the variable
const keyName = "key6";
object[keyName] = "value6";
console.log(object);
