// Topic: For In Loop

// Q. What is for in loop?
// - It is use to iterate over the object property.

// NOTE
// - The order of iteration is not guaranteed.
// - Not recommended to use on array.

// SYNTAX
// for (key in object){
//   Code...
// }

// For in loop on object
const object = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

for (let key in object) {
  console.log(key);
  console.log(object[key]);
}

// For in loop on array (NOT RECOMMENDED)
const array = [1, 2, 3, 4, 5];
for (const index in array) {
  console.log(index);
  console.log(array[index]);
}
