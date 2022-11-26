/* 
    !NOTE:
    - array > for in > index
    - objects > for in > key
*/

// Array
const arr = ["a", "b", "c"];

for (const i in arr) {
  console.log(i);
  console.log(arr[i]);
}

// Objects
const obj = {
  k1: "v1",
  k2: "v2",
  k3: "v3",
};

for (const i in obj) {
  console.log(i);
  console.log(obj[i]);
}