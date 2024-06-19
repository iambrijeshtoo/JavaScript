// Function Declaration
function myFunction(parameter) {
  console.log(parameter);
  return;
}

// Function Expression
// Named Function Expression
const myVariable1 = function myFunction(parameter) {
  console.log(parameter);
  return;
};

// Anonymous Function Expression
const myVariable = function (parameter) {
  console.log(parameter);
  return;
};

// Function inside the object
// - Do not confuse between storing function inside variable and storing function inside object using key.
// - When you store function inside variable it's function expression and also it is anonymous function.
// - But when you store function inside object using the key and value pair. It's only anonymous function.
const myObject = {
  myFunction: function (parameter) {
    console.log(parameter);
    return;
  },
};

// Arrow Function (Anonymous by Default)
const arrowFunction = (parameter) => {
  console.log(parameter);
};
