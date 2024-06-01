// Lexical Scope OR Closer

// Q.What is lexical scope or closer?
// - Nested functions can access variables and parameters from their containing functions. This concept is known as "lexical scoping" or "closure."

function outerFunction() {
  let outerVariable = "I'm from the outer function";

  function innerFunction() {
    console.log(outerVariable);
  }

  innerFunction();
}

outerFunction();
