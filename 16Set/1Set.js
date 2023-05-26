// Set

// Q.What is set?
// - Set is look like array but it's not an array. It's an array like object. Which can store unique value but no duplicate values are allowed as we do with array. It's iterable.

// NOTE
// - No duplicate values are allowed.
// - Different type of data can be stored.
// - Element can't be access by using index.
// - Order of the element is not guaranteed.
// - Not even insert order is guaranteed.

// SYNTAX

// Using constructor
const set1 = new Set([1, 2, 3, 4, 5]);
console.log(set1);

// EXAMPLE

// Removing duplicate element from the array using set.
const arr = [101, 102, 103, 104, 104, 105, 105, 106];

const uniqueElement = new Set(arr);
console.log(uniqueElement);

// Finding the length
let length = 0;
for (arr of uniqueElement) {
  length++;
}
console.log(length);
