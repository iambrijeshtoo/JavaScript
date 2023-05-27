// forEach()

// Q. What is forEach()?
// - The forEach() method is a built-in function in JavaScript that allows you to iterate over the elements of an array or array-like object and perform a specified action for each element. It provides a convenient way to iterate through the elements without the need for explicit loop constructs like for or while loops.

// NOTE
// - The forEach() method accepts a callback function as its argument, which is invoked for each element in the array. The callback function takes three parameters: the current element being processed, the index of the current element, and the array or array-like object being iterated.

// SYNTAX
// array.forEach(callback(currentValue, index, array) {
//  Perform action on each element
// });

const array = [1, 2, 3, 4, 5];

// Create function which returns array's elements and index
function fun(element, index) {
  console.log(element);
  console.log(index);
}

for (let i = 0; i < array.length; i++) {
  fun(array[i], i);
}

// Using forEach() method will do same as above code
array.forEach(fun);

// forEach method take function as parameter
array.forEach(function (element) {
  console.log(element);
});

// Using arrow function
array.forEach((element) => {
  console.log(element);
});

// EXAMPLE
const arr1 = [
  {
    name1: "value1",
    name2: "value2",
    name3: "value3",
    sameName: "same value",
  },
  {
    name4: "value4",
    name5: "value5",
    name6: "value6",
    sameName: "same value",
  },
];

arr1.forEach((obj) => {
  console.log(obj.sameName);
});
