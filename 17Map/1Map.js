// Map

// Q. What is Map?
// - It is iterable.
// - It can store different type of data. Also `key : value` can be any type of data.
// - It can store duplicate value with different key. If you add same key in map it will take the last added key and update the value.
// - It store data in `key : value` form.
// - It's like Object .
// - Element insertion order is guaranteed.

// SYNTAX
// const map = new Map([
//   ["key1", "value1"],
//   ["key2", "value2"],
//   ["key3", "value3"],
// ]);

// Create map using constructor
const set = new Map();


// Iterable


// Return values
for (let key of map) {
  console.log(key);
}

// Return keys and values
// It's return key and value in array form.
for (let [key, value] of map) {
  console.log([key, value]);
}

// Using object as key
const teachersDetail = {
  id: "101",
  name: "Math Teacher",
};
const extraTeachersDetail = new Map();
extraTeachersDetail.set(teachersDetail, {
  subject: "Math",
  department: "Math Department",
});
console.log(teachersDetail.id);
console.log(teachersDetail.name);
console.log(extraTeachersDetail.get(teachersDetail).department);