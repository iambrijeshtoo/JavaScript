// forEach()

// What
// - The forEach() method is a built-in function in JavaScript that allows you to iterate over the elements of an array or array-like object and perform a specified action for each element. It provides a convenient way to iterate through the elements without the need for explicit loop constructs like for or while loops.

// Note
// - The forEach() method accepts a callback function as its argument, which is invoked for each element in the array. The callback function takes three parameters: the current element being processed, the index of the current element, and the array or array-like object being iterated.

// Syntax
// array.forEach(callback(currentValue, index, array) {
//  Perform action on each element
// });

const array = [0, 1, 2, 3, 4, 5];

// forEach()
array.forEach((currentElement, index, arr) => {
  console.log(currentElement, index, arr);
});

// Regular function as callback function inside forEach()
array.forEach(function (element) {
  console.log(element);
});

// Arrow function as callback function inside forEach()
array.forEach((element) => {
  console.log(element);
});

// Passing whole function as callback function inside forEach()
function printElement(element) {
  console.log(element);
}
array.forEach(printElement);

// [{}, {}, {}]
const array1 = [
  {
    key1: "value1",
    key2: "value2",
    key3: "value3",
  },
  {
    key1: "value1",
    key2: "value2",
    key3: "value3",
  },
  {
    key1: "value1",
    key2: "value2",
    key3: "value3",
  },
];

array1.forEach((element) => {
  console.log(element.key1);
});
