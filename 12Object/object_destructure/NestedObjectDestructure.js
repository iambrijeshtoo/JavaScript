/* -------------------------- Nested Destructure ------------------------- */

// Objects inside the array.
const array = [
  {
    key1: "value1",
    key2: "value2",
    key3: "value3",
  },
  {
    key4: "value4",
    key5: "value5",
    key6: "value6",
  },
];

// Taking objects from the array and storing in variables and each variable has one object
const [variable1, variable2] = array;
console.log(variable1);
console.log(variable2);

// Accessing specific key & value from the different objects.
const [{ key1 }, { key4 }] = array;
console.log(key1);
console.log(key4);

// Accessing specific key & value from the objects and assigning different variable name
const [{ key1: myVariable1 }, { key4: variable4 }] = array;
console.log(myVariable1);
console.log(variable4);

/* 
  NOTE:
  - When objects are inside the array and you are accessing different key and values from the different object.
  - It will give you the key and value according the index which are object stored.
  - Because all those object inside the array work as a element of the array.
*/
