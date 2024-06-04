// Map

// What
// - It is iterable.
// - It store data in `[key, value]` form.
// - Element insertion order is guaranteed.
// - It can store duplicate value with different key. If you add same key in map it will take the last added key and update the value.
// - It is a built-in object in JavaScript that stores key-value pairs. Unlike objects (which use strings or symbols as keys), Map allows you to use any data type (including objects) as keys.

// Why
// - It provides a more flexible and ordered way to store data compared to traditional objects.
// - Map objects are particularly useful when you need to use non-string keys or when you want to maintain the insertion order of key-value pairs.

// How
// - You can create a Map object using the new Map() constructor or by providing an iterable of key-value pairs.
// - You can add key-value pairs using the set() method and access values using the get() method.
// - You can also check if a key exists using the has() method and remove a key-value pair using the delete() method.

// SYNTAX
// const map = new Map([
//   ["key1", "value1"],
//   ["key2", "value2"],
//   ["key3", "value3"],
// ]);

// Using the constructor
const myMap = new Map();

// Using an iterable (array of key-value pairs)
const anotherMap = new Map([
  ["name", "Alice"],
  [1, "one"],
  [true, "boolean value"],
]);

// Adding key-value pair in Map()
myMap.set("age", 30);
myMap.set({}, "object key"); // Can use objects as keys

// Accessing value
const value = myMap.get("age"); // value will be 30

// Checking for keys
if (myMap.has("name")) {
  console.log("Name exists in the map");
}

// Removing key-value pair
myMap.delete("age");
