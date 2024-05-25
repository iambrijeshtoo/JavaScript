// slice()

// What
// - The slice() method is used to extract a section of an array and return a new array containing the selected elements. It's a non-mutating method, meaning it doesn't modify the original array.

// Why
// - Extract Subsets: You often need to work with only a portion of an array's data. slice() allows you to conveniently create a new array containing the desired elements.
// - Create Copies: Sometimes you want to work with a copy of an array without modifying the original. slice() helps create a shallow copy of the specified portion.
// - Data Manipulation: slice() can be combined with other array methods like concat() or push() to manipulate and rearrange array data.

// Syntax
// array.slice(start, end);

// - start (optional): The index at which to begin extraction (inclusive). Defaults to 0 (the beginning of the array). Negative values count from the end of the array.
// - end (optional): The index at which to end extraction (exclusive). Defaults to the end of the array. Negative values count from the end of the array.

// Example
const fruits = ["apple", "banana", "cherry", "orange", "mango"];
const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Output: ["banana", "cherry"]
console.log(fruits); // Output: ["apple", "banana", "cherry", "orange", "mango"] (original array remains unchanged)

// Pros:

// Easy to use and understand for extracting array subsets.
// Creates a new array without modifying the original, promoting immutability.
// Can be combined with other array methods for powerful data manipulation.
// Cons:

// Creates a new array, which can be less memory-efficient for very large arrays if you only need a small portion.
// For simple extractions from the beginning or end, consider methods like shift(), pop(), or unshift().

// Additional Notes
// If start is greater than or equal to end, an empty array is returned.
// Negative values for start and end are allowed for counting from the end of the array.