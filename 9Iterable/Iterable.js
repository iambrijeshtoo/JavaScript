// String
const str = "Hello, World!";
for (char of str) {
  console.log(char);
}

// Array
const arr = [1, 2, 3, 4, 5];
for (ele of arr) {
  console.log(ele);
}

// Object
const obj = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};
for (const key in obj) {
    console.log(obj[key]);
  }


// Set
const set = new Set([1, 2, 3, 4, 5]);

for (const ele of set) {
  console.log(ele);
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
