/* ------------------------------- For In Loop ------------------------------ */

// Q. What is for in loop?
// - It is use to iterate over the object names.

// [NOTE]
// - `for in` loop only meant to use for iterate over object. It is not recommended to use for iterate over array. Even though it work on array but if you use it on array the ordered will not guaranteed. To iterate over array better to use `for` loop or `forEach()` method.

// [SYNTAX]
// for (key in object){
//   Code...
// }

// For in loop on object
const object = {
  a: 1,
  b: 2,
  c: 3,
};

for (let key in object) {
  console.log(key, object[key]);
}

// For in loop on array (Not Recommended)
const array = [1, 2, 3, 4, 5];
for (const i in array) {
  console.log(i);
  console.log(array[i]);
}
