// filter()

// NOTE
// - It return new array.
// - It take callback function as a parameter
// - When you pass a callback function as a parameter in filter method make sure it has return boolean value because it return value base on condition statement.
// - If it doesn't find the required value it will return empty array.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const filteredArray = array.filter((element) => {
  return element % 2 === 0;
});

console.log(filteredArray);