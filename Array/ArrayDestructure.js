// Array destructure

const array = ["Item1", "Item2", "Item3"];

// # How to store one array element in one single variable?

// Dry syntax
let variable1 = array[0];
let variable2 = array[1];
let variable3 = array[2];
console.log(variable1);
console.log(variable2);
console.log(variable3);

// Better syntax
let [variable4, variable5, variable6] = array;
console.log(variable4);
console.log(variable5);
console.log(variable6);

// # How to store one array element in one single variable and create new array using the element left inside the old array?
let [variable7, ...newArray] = array;
console.log(variable7);
console.log(newArray);

// # How to skip array's element value when you storing in variable?
let [variable8, , variable9] = array;
console.log(variable8);
console.log(variable9);
