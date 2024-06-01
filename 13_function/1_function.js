// Function

// Syntax
// function functionName(parameter1, parameter2){
//  Code...
// return
// }
// functionName(argument1, argument2)

// Note
// - When argument doesn't pass it will take value as a undefined (In other word empty function return undefine).
// - functionName -> Reference (function definition)
// - functionName() -> Execution (Calling)

// Example
function myFunction(parameter1, parameter2) {
  return console.log(parameter1 + parameter2);
}

// Calling function
myFunction(1, 2);

// Printing function
console.log(myFunction(1, 2));

// Passing the function's reference only
console.log(myFunction);

// Without return keyword
// - If you create a function without the return and store that function inside the variable and check the value it will be undefined. Because the function doesn't returning the value.
function myFunction(parameter1, parameter2) {
  let result = parameter1 + parameter2;
}

let result = myFunction(1, 2);
console.log(result); // output: undefined

// With return keyword
function myFunction1(parameter1, parameter2) {
  // let result = parameter1 + parameter2;
  // return result;
  return parameter1 + parameter2;
}

let result1 = myFunction1(1, 2);
console.log(result1); // output: 3

// How to take parameter values
function loginUserName(username = "default value") {
  if (!username) {
    console.log("Please enter a username!");
    return;
  }
  return `Welcome ${username}!`;
}

loginUserName("Brijesh"); // This will not give you the output that function is returning.
const myVariable = loginUserName("Brijesh"); // You need to store the function inside variable to hold the returning value.
console.log(myVariable);
