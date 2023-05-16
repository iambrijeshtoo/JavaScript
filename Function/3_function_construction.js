/* -------------------------- Function Construction ------------------------- */

let variable = new Function(
  "parameter_1",
  "parameter_2",
  "return parameter_1 + parameter_2"
);

let variable_1 = variable(1, 2);
console.log(variable_1);
