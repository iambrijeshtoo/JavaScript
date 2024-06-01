// Global Scope

// What
// - Variables declared outside of any function or block have global scope.
// - They are accessible from anywhere in your code, including inside functions and other blocks.

let globalVar = "This is a global variable";

function myFunction() {
  console.log(globalVar); // Can access globalVar here
}

console.log(globalVar); // Can access globalVar here as well
