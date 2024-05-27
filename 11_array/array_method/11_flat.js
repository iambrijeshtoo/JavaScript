// flat()

// What
// - When you have complex array which has array inside the array.
// - If you want to convert it in one single array that contain all the elements.
// - Use flat() and Infinity as a value. Which will check the depth of the array and convert to one single array.

const myArray = [0, 1, 2, 3, [4, 5, 6], 7, 8, [9, [0, 1, 2, 3]]];
const myFlatArray = myArray.flat(Infinity);
console.log(myFlatArray);
