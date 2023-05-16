/* ---------------------------- Array Destructure --------------------------- */

// Q. What is array destructuring?
// - Array destructuring is a feature in JavaScript that allows you to extract values from an array and assign them to individual variables.

const array = [1, 2, 3, 4, 5];

// Dry syntax
let variable_1 = array[0];
let variable_2 = array[1];
let variable_3 = array[2];
console.log(variable_1);
console.log(variable_2);
console.log(variable_3);

// Better syntax
let [variable_4, variable_5, variable_6] = array;
console.log(variable_4);
console.log(variable_5);
console.log(variable_6);

// Store element in single variable and creating new array using remaining elements.
let [variable_7, ...new_array] = array;
console.log(variable_7);
console.log(new_array);

// Skipping single element when storing array elements inside variables.
let [variable_8, , variable_9] = array;
console.log(variable_8);
console.log(variable_9);
