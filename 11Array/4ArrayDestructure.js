// Array Destructure

// Q. What is array destructuring?
// - Array destructuring is a feature in JavaScript that allows you to extract values from an array and assign them to individual variables.

const arr = [1, 2, 3, 4, 5];

// Dry syntax
let var1 = arr[0];
let var2 = arr[1];
let var3 = arr[2];
console.log(var1);
console.log(var2);
console.log(var3);

// Better syntax
let [var4, var5, var6] = arr;
console.log(var4);
console.log(var5);
console.log(var6);

// Store element in single variable and creating new array using remaining elements.
let [var7, ...newArr] = arr;
console.log(var7);
console.log(newArr);

// Skipping single element when storing array elements inside variables.
let [var8, , var9] = arr;
console.log(var8);
console.log(var9);
