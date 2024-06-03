// Arrow Function

// SYNTAX
// const variableName = () => {
//    code...
// return
// }

// Simple arrow function
const arrowFunction = () => {
  return console.log("Hello, World!");
};

// Implicit Return

// Note
// - If you use {} for function. You need to write the `return` keyword.
const arrowFunction1 = () => {
  return console.log("Hello, World!");
};

// - If you are not using the {}. You don't need to write the `return` keyword.
const arrowFunction2 = () => console.log("Hello, World!");

// - If you are using object with arrow function without {}. You need to use ().
const arrowFunction3 = () => ({ key1: "value1" });

// - If you are passing only one parameter. You can remove () around the parameter.
// const myArrowFunction1 = parameter => console.log(parameter);

// () => {}
// () =>
// () => ()
//    =>
