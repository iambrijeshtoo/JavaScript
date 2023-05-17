/* ------------------------------ Object Method ----------------------------- */

// Q. What is object method?
// - When have function inside the object it known as method.

const object = {
  function_1: function () {
    console.log("Hello, World!");
  },
};

// Accessing method
console.log(object.function_1());

// Adding method
object.function_2 = function () {
  console.log("Hello, World!");
};
