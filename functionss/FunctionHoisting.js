// Function Hoisting

/* 
    # What is function hoisting?
    - Normally in programming language what happen is that when you create function then you can call it.
    - You can't call the function above the function declare.
    - But in JavaScript you can call the function above the function declare.
    - This type of behavior known as function hoisting.
*/

// Calling function above the function declare.
greet();

// Function declare
function greet() {
  return console.log("Hello, World!");
}