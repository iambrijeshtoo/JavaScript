/* --------------------- Self Calling/ Invoking Function -------------------- */

// Q. What is self calling function?
// - A self-invoking expression is invoked (started) automatically, without being called.

// [SYNTAX]
// (function function_name(){}) ();

(function greet() {
  console.log("Hello, World");
})();
