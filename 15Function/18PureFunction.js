// Pure Function

// Q. What is Pure Function?
// - A pure function is a function that, given the same input, always produces the same output and has no side effects. It operates solely on its input parameters, without modifying any external state or relying on mutable data. The result of a pure function is solely determined by its inputs, making it predictable and deterministic.

// EXAMPLE

function add(a, b) {
  return a + b;
}

console.log(add(1, 2));
