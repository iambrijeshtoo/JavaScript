// String
const string = "Hello, World!";
for (character of string) {
  console.log(character);
}

// Array
const array = [1, 2, 3, 4, 5];
for (element of array) {
  console.log(element);
}

// Object
const object = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};
for (const key in object) {
  console.log(object[key]);
}

// Set
const set = new Set([1, 2, 3, 4, 5]);

for (const element of set) {
  console.log(element);
}

// Map
const map = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
  ["key3", "value3"],
]);

for (const [key, value] of map) {
  console.log(key, value);
}
