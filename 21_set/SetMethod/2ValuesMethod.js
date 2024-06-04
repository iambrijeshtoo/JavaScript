// `values()` Method

// Q. What is `values()`?
// - `values()` method is a built-in method in JavaScript that is available on Set objects. It returns a new iterator object that contains the values of the elements in the Set in the order of insertion.

// Q. Why use `values()`?
// - The values() method is commonly used when you want to access the values of a Set in a loop or perform operations on each value individually.

const set = new Set([1, 2, 3, 4, 5]);
let iteratorObject = console.log(set.values()); // Return an iterator object