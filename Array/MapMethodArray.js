// Map method in array

const array = [1, 2, 3];

const variable = function (element) {
  return element * element;
};

/* 
    NOTE:
    - map() method return new array
    - map() method take callback function as a parameter 
    - When you pass a callback function as a parameter in map() method make sure it has return value.
*/

const newArray = array.map(variable);
console.log(newArray);

// Using arrow function
const newArray2 = array.map((element) => {
  return element * element;
});
console.log(newArray2);

// Example
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
