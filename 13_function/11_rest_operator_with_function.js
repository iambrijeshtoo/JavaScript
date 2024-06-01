// Rest `...` Operator With Function

// What
// - Rest and Spread operator syntax is same. It depends on there use case. Where it will be taken as a spread or rest operator.

// How
// - When you use rest operator inside the function's parameter. It will take the arguments and return an array of the arguments.

// Syntax
function myFunction(parameter1, parameter2, ...restOfParameters) {
  return parameter1, parameter2, restOfParameters;
}

console.log(myFunction(1, 2, 3, 4, 5));
