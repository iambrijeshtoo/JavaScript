// Call back function

// What is call back function?
// - Call back function is when we pass function as a parameter into another function.

// How to use call back function?
// 1. Pass function as a parameter to another function.
// 2. Directly passing function as a parameter to another function.
// 3. Directly passing arrow function as a parameter to another function.

// NOTE
// - JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.

// 1. Pass function as a parameter to another function.
function myFunction1() {
  console.log("I am function1 called by using call back function");
}

function myFunction2(callBackFunction) {
  console.log("I am function2");
  callBackFunction();
}

myFunction2(myFunction1);

// 2. Directly passing function as a parameter to another function.
myFunction2(function () {
  "I am function";
});

// 3. Directly passing arrow function as a parameter to another function.
myFunction2(() => console.log("I am arrow function"));

// ANALOGY

// Let's imagine you're going to a restaurant and you want to place an order. You have a special request: you want to be notified when your order is ready so that you can pick it up.

// In this scenario, you are the main program or the "caller", and the restaurant is the function you're calling. The restaurant has a chef who will prepare your order, and you need a way to be notified when the order is ready.

// Here's where the concept of a callback comes in. You give the restaurant your phone number and ask them to call you back when the order is ready. In this case, your phone number is the callback function.

// In JavaScript, a callback function is similar to giving your phone number to the restaurant. It's a function that you provide as an argument to another function. The main function (the "caller") will call the callback function at an appropriate time, usually when a certain task or operation is completed.
