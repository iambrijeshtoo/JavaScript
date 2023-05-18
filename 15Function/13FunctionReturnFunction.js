// Function Returning Function OR Higher Order Function

// Q.What is function returning function?
// - When a function returns another function, the returned function can be assigned to a variable and invoked later.

function outerFunction() {
  // Outer function scope

  function innerFunction() {
    // Inner function scope
    console.log("This is the inner function.");
  }

  return innerFunction;
}

// Call the outer function and assign the returned function to a variable
var returnedFunction = outerFunction();

// Call the returned function
returnedFunction();
