// Nested Function

// Q.Why use nested function?
// - Nested functions can be useful for creating private variables and encapsulating functionality. By defining functions inside other functions, you can limit their accessibility and keep your code organized.

// NOTE
// - When a function is defined inside another function, it becomes a local function, meaning it is only accessible within the scope of the outer function.

function outerFunction() {
  // Outer function scope

  function innerFunction() {
    // Inner function scope
    console.log("This is the inner function.");
  }

  console.log("This is the outer function.");

  // Call the inner function
  innerFunction();
}

// Call the outer function
outerFunction();
