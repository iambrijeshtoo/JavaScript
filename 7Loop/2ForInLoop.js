// For In Loop

// Q. What is for in loop?
// - It is use to iterate over the object keys.

// NOTE
// - for in loop only meant to use for iterate over object. It is not recommended to use for iterate over array. Even though it work on array but if you use it on array the ordered will not guaranteed. To iterate over array better to use for loop or forEach() method.

// SYNTAX
// for (key in object){
//   Code...
// }

// For in loop on object
const obj = {
  key1: "value1",
  key2: "value2",
};

for (let key in obj) {
  console.log(key, obj[key]);
}

// For in loop on array (Not Recommended)
const arr = [1, 2, 3, 4, 5];
for (const ele in arr) {
  console.log(ele);
  console.log(arr[ele]);
}
