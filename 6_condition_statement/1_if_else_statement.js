// If Else Statement

// SYNTAX
// if (condition) {
//  Code...
// } else {
//  Code...
// }

let age = 20;
if (age >= 18) {
  console.log("You can give a vote.");
} else {
  console.log("You can't give a vote.");
}

// NOTE

// CASE: 1
// if
// if
// if
// - Non-nested multiple if statement will executed as there own one by one.
// - Even if the first condition is satisfy it will still check remaining if statement.
// - In other word all the condition will check.

// CASE: 2
// if
//  if
// if
// - If you have `if` statement nested inside the `if` statement it will only execute when parent `if` statement gets satisfy.
// - If child `if` statement doesn't satisfy that block of `if` statement will not execute and it will go check the other statement.