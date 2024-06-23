// Lexical Scope

// Resource

// What
//  -> Lexical scope in JavaScript means that the scope of a variable is determined by its position within the source code's lexical structure (the location where the variable is declared or defined).
// -> When a function is defined, it captures its surrounding lexical environment(scope chain) at the time of its creation.

// Why
// -> Clarity and Predictability: Helps developers understand where variables are defined and how they are accessed.
// -> Encapsulation: Enables functions to access variables from their containing scope, promoting modular and maintainable code.
// -> Closure: Facilitates the creation of closures, where inner functions retain access to variables in their lexical scope even after the outer function has finished executing.

// Example
function outerFunction() {
  const outerVariable = "value";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const variable = outerFunction();
variable();

// Note
