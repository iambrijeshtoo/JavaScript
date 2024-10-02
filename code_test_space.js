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

// const promise1 = new Promise(function (resolve, reject) {
//   // Do async task
//   // Database call, cryptography, network

//   setTimeout(function () {
//     console.log("Async task is complete");
//     // resolve();
//   }, 1000);
// });

// // promise1;

const object = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
  nestedObject: {
    key4: "value4",
    key5: "value5",
    key6: "value6",
  },
};

console.table(object);
