// For of Loop

// What
// - for...of is a loop specifically designed to iterate over iterable objects in JavaScript.
// - Iterable objects are those that can provide a sequence of values, such as arrays, strings, maps, sets, and some custom objects.

// Why
// - It offers a concise and readable way to iterate over the values of an iterable object, often used in modern JavaScript code.
// - Compared to traditional for loops (with indices), it focuses on the values themselves, potentially improving code clarity.

// - How
// - It works by creating an iterator for the iterable object.
// - An iterator is an object that provides a next() method, which returns the next element in the sequence along with a done property indicating whether the iteration is complete.
// - The loop automatically iterates until there are no more values left (the done property becomes true).

// Note
// - The order of iteration is guaranteed.
// - Not recommended to use on object.
// - Unlike traditional for loops, for...of doesn't give you access to the current index directly. If you need the index, you can use a combination of for...of with a traditional for loop (nested or with an index counter).
// - The for...of loop doesn't modify the original iterable object. It iterates over a copy of the values.

// Syntax
// for (const element of iterable_object) {
//   // Code to be executed for each element
// }

// Example

// For of loop on string
const myString = "String";
for (const character of myString) {
  console.log(character);
}

// For of loop on array
const array = [0, 1, 2, 3, 4, 5];

for (const element of array) {
  console.log(element);
}

// For of loop on Map()
const myMap = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
  ["key3", "value3"],
]);

// for of -> Map -> key
for (const key of myMap) {
  console.log(key);
}
// for of -> Map -> [key, value] -> key | value
for (const [key, value] of myMap) {
  console.log(key);
  console.log(value);
}

// For of loop on object (NOT RECOMMENDED)
// Object.keys(objectName) -> key -> objectName[key] -> value
const object = {
  key1: "value1",
  key2: "value2",
};
for (const key of Object.keys(object)) {
  console.log(object[key]);
}
