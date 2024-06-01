// Function Scope (Local Scope)

// What
// - Variables declared within a function have function scope (also known as local scope).
// - They are only accessible within the function they are declared in, not outside of it.

function myFunction() {
  let localVariable = "This is a local variable";
  console.log(localVariable); // Can access localVariable here
}

// console.log(localVariable); // ReferenceError: localVariable is not defined (localVariable is not accessible here)
