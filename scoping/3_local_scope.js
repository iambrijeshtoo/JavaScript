// Local Scope

// Q. What is Local Scope?
// - Variables and functions declared inside a function or block have local scope. They are accessible only within the function or block in which they are defined. Local variables and functions are declared using the var, let, or const keywords within a function or block.

// Type of Local Scope
// 1. Function Scope: Variable are declare inside the function.
// 2. Block Scope: Variable are declare inside the block.

// NOTE
// - var follow the function scope.
// - let and const follow the block scope.

function fun() {
  const var1 = "I have Function Scope";
}
