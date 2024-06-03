// Closure

// Q. What is Closure?
// - Using variable which is out side of function in inside the function.

// EXAMPLE

// Accessing variable outside of the function
let outsideVar = "Hey! I'm out side variable";
function fun() {
  console.log(outsideVar);
}

fun();

// -In JavaScript, a closure is a combination of a function and the environment in which it was created. It allows a function to access variables from its outer (enclosing) scope even after the outer function has finished executing.

// - Imagine you have an outer function that creates an inner function. The inner function has access to the variables and parameters of the outer function, even after the outer function has returned. This happens because the inner function forms a closure, retaining references to those variables.

function outer() {
  var outerVariable = 'Hello';

  function inner() {
    console.log(outerVariable);
  }

  return inner;
}

var closure = outer();  // Invoke outer() and store the returned inner function in 'closure'
closure();  // The inner function still has access to 'outerVariable'

// In the above code, the `outer` function creates the `inner` function and returns it. When `outer` is invoked and assigned to `closure`, it forms a closure. The `inner` function still has access to the `outerVariable` declared in its outer scope, even though `outer` has finished executing.

// Closures are powerful because they allow functions to maintain access to the variables they need, even when they are used elsewhere or executed at a different time. This feature enables techniques such as data encapsulation, private variables, and creating functions that can "remember" values from their creation context.