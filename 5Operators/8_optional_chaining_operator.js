// Optional Chaining Operator

// Q. What is Optional Chaining Operator?
// - It's like asking someone for an answer who know the answer.
// - For example in JavaScript object when we need to access it's property and method by using `?.` we are checking that actually that object has those property and method.

// SYNTAX
// const objectName = {
//  key = "value";
//  key = "value";
//  key = "value";
// }
// object?.key;

let object = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};
console.log(object?.key1);
