// Fill Method

// Q. What is fill method?
// - It take custom value and replace element in array with custom value.
// - You can create empty array and fill the array with custom value.

// Q. How to use fill method?
// - It take direct custom value and fill the array with it.
// - It can take custom value and replace element with custom value for selected start and end index.

// SYNTAX
// Creating an array using the Array constructor and filling the array with custom value
const arr = new Array(10).fill(10);
console.log(arr);

// Adding custom value to select index
const arr1 = [1, 2, 3, 4, 5];
const answer = arr1.fill("*", 2, 4); // (custom value, start index, end index)
console.log(answer);
