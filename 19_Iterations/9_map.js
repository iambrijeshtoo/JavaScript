// `map()`

// What
// - .map() is a built-in method for arrays in JavaScript. It creates a new array by applying a function to all elements of the original array.
// - It transforms each element in the original array based on the provided function, giving you a new array with the results.

// Why
// - It offers a concise and efficient way to perform the same operation on every element in an array, creating a new transformed array.
// - It avoids repetitive code for iterating through an array and modifying each element individually.

// How
// - You provide a callback function to .map(). This function is called for each element in the original array.
// - The callback function takes three arguments (though the last two are optional):
// - currentValue: The current element being processed in the iteration.
// - index (optional): The index of the current element (if needed).
// - array (optional): The original array being iterated over (if needed).
// - The callback function should return a value that will be included in the new array.

// Syntax
// const newArray = originalArray.map(callbackFunction);

// Example
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumbers = array.map((number) => number < 10);
console.log(newNumbers);

// EXAMPLE
const array1 = [
  {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    sameKey: "same value",
  },
  {
    key4: "value4",
    key5: "value5",
    key6: "value6",
    sameKey: "same value",
  },
];

const newArray3 = array1.map((object) => {
  return object.sameKey;
});
console.log(newArray3);
