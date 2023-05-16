/* ---------------------------- Arrow Function --------------------------- */

// Q. What is arrow function?
// - It is the short syntax for function.

// [SYNTAX]
// const/ let variable_name = () => {}

const function_1 = () => {
  console.log("Hello, World!");
};

// For single parameter remove small bracket
const function_2 = (name) => {
  return console.log(`Hello ${name}`);
};

// If function return in single statement remove return keyword
const function_3 = (name) => console.log(`Hello ${name}`);
