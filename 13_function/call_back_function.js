// Call back function

// What
// - A callback function is a function that is passed as an argument to another function. The main function can then call the callback function at a specific time, allowing you to control the sequence of actions in your code.

// Why
// - Callbacks are used to make sure that certain code is executed only after a specific task is completed. They're especially useful in asynchronous operations, like reading a file or fetching data from a server, where you don't want to wait for the operation to finish before moving on to the next task.

// How
// - You define a function, and then you pass that function as an argument to another function. When the task in the second function is done, it calls the function you passed in – that's your callback function.

// Syntax
function mainFunction(callback) {
  // Do something...
  callback(); // Call the callback function
}

function callbackFunction() {
  // Do something after the main function completes its task
}

// Call the main function and pass the callback function as an argument
mainFunction(callbackFunction);

// Example
function fetchData(callback) {
  // Simulate fetching data from a server
  setTimeout(function () {
    let data = "Fetched data from the server";
    callback(data); // Call the callback function with the fetched data
  }, 1000); // Simulating a delay of 1 second
}

function displayData(data) {
  console.log("Data received: " + data);
}

// Call the fetchData function and pass the displayData function as a callback
fetchData(displayData);

// Note
// - Callbacks are fundamental in JavaScript, especially for asynchronous tasks. However, using too many nested callbacks can lead to complex and hard-to-read code. To handle asynchronous operations more elegantly, consider using Promises or Async/Await, which provide a more structured way to work with asynchronous code.

// Summary
// - A callback function is a function passed as an argument to another function, allowing you to control the sequence of actions in your code. They are crucial for managing asynchronous tasks and ensuring that specific code is executed only after a particular task is completed. To maintain readability, consider alternative solutions like Promises or Async/Await for complex asynchronous operations.
