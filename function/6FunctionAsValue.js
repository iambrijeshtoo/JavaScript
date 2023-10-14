// Function As Value

// Function expression (Look at the variable color is like function and function is anonymous)
let var1 = function () {
  console.log("Hello, World!");
};

// Function stored as a variable's value
function fun(a, b) {
  return a + b;
}
let var2 = fun(1, 2);
console.log(var2);

// Function can be also used with expression
let var3 = fun(1, 2) + 3;
console.log(var3);
