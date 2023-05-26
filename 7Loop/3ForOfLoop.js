// For of Loop

// Q. What is for of loop?
// - It is use to iterate over the arrays element in order.

// NOTE
// - for of loop does not work on the object. Because it iterates over the element not the key. So it is not recommended to use for of loop on object. It is possible to use but we need to use Object.keys()

// SYNTAX
// for(element of array){
//  Code...
// }

// For of loop on array
const arr = [1, 2, 3, 4, 5];

for (const ele of arr) {
  console.log(ele);
}

// For of loop on object (Not Recommended)
// Object.keys(objectName) > key > objectName[key] > value
const obj = {
  name1: "value1",
  name2: "value2",
};
for (const key of Object.keys(obj)) {
  console.log(obj[key]);
}
