// For of Loop

// Q. What is for of loop?
// - It is use to iterate over the arrays element.
// - The `for of` loop iterates over iterable including arrays, strings, maps, sets, and other data structures that implement the iterable protocol.

// NOTE
// - The order of iteration is guaranteed.
// - Not recommended to use on object.

// SYNTAX
// for(element of array){
//  Code...
// }

// For of loop on array
const array = [1, 2, 3, 4, 5];

for (const element of array) {
  console.log(element);
}

// For of loop on object (NOT RECOMMENDED)

// Object.keys(objectName) > key > objectName[key] > value
const object = {
  key1: "value1",
  key2: "value2",
};
for (const key of Object.keys(object)) {
  console.log(object[key]);
}
