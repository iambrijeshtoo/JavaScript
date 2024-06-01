// Block Scope

// What
// - Introduced in ECMAScript 6 (ES6), block scope applies to variables declared with let or const within blocks created by curly braces {}.
// - These variables are only accessible within the block they are declared in, not outside of it. This includes if statements, for loops, and other block-based constructs.

if (true) {
  let blockVariable = "This is a block variable";
  console.log(blockVariable); // Can access blockVariable here
}

console.log(blockVariable); // ReferenceError: blockVariable is not defined (blockVariable is not accessible here)
