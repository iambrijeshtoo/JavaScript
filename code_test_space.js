// TODO: This example is connected to the closer concept which is the video number - 49.
// function outerRegularFunction() {
//   const variable = "value";
//   function innerRegularFunction() {
//     console.log(this.variable);
//   }
//   console.log(innerRegularFunction());
// }
// console.log(outerRegularFunction());

// const regularFunctionExpression = function () {
//   console.log(arguments);
// };

// regularFunctionExpression("hey");

// const arrowFunction = () => {};

"use strict";

const object = {
  key: "value",
  method: function () {
    console.log(this.key);
  },
};

console.log(object.method());
