// Array with function

const myArray = [0, 1, 2, 3, 4, 5];

function handleArray(getArray) {
  return getArray[1];
}

// Passing an array reference as a argument in the function.
console.log(handleArray(myArray));

// Passing literally an array as a argument in the function.
console.log(handleArray([0, 1, 2, 3, 4, 5]));
