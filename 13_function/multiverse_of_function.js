// Normal Function
function myFunction(parameter) {
  console.log(parameter);
  return;
}

// Function Expression
const myVariable = function myFunction(parameter) {
  console.log(parameter);
  return;
};

// Anonymous Function
const myVariable1 = function myFunction(parameter) {
  console.log(parameter);
  return;
};

// Function inside the object
// - Do not confuse between storing function inside variable and storing function inside object using key.
// - When you store function inside variable it's function expression and also be anonymous function.
// - But when you store function inside object using the key and value pair. It's only anonymous function.
const myObject = {
  myFunction: function myFunction(parameter) {
    console.log(parameter);
    return;
  },
};