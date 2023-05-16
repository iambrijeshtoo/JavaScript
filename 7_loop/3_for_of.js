/* -------------------------------- For Of Loop ------------------------------- */

// Q. What is for of loop?
// - It is use to iterate over the arrays element in order.

// [NOTE]
// - for of loop does not work on the object. Because it iterates over the element not the key. So it is not recommended to use for of loop on object. It is possible to use but we need to use Object.keys()

// [SYNTAX]
// for(element of array){
//  Do something...
// }

// For of loop on array
const array = [1, 2, 3, 4, 5];

for (const element of array) {
  console.log(element);
}

// For of loop on object (Not Recommended)
// Object.keys(objectName) > key > objectName[key] > value
const object = {
  a: 1,
  b: 2,
  c: 3,
};
for (const key of Object.keys(object)) {
  console.log(object[key]);
}
