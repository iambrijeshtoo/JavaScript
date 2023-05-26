// Promise

// Q. What is Promise?
// - Imagine you have a friend who promises to lend you their bicycle tomorrow. You trust your friend, so you're confident they will keep their promise. Now, you have two options: you can either wait until tomorrow and hope your friend brings you the bicycle, or you can continue with your day and do something else while waiting.

// - In JavaScript, a promise works in a similar way. It represents an operation that will complete in the future, either successfully with a result or with an error. You can create a promise for a task, like fetching data from a server, and then continue doing other things while waiting for the task to finish.

// - When you create a promise, it's like making a deal with JavaScript. JavaScript says, "Okay, I'll keep an eye on this task for you, and when it's done, I'll let you know." So, you give JavaScript two functions: one to call when the task is successful (let's call it resolve), and another to call when there's an error (let's call it reject).

// - Once the promise is set up, JavaScript takes over. It starts working on the task in the background while you can keep doing other things. When the task is completed, JavaScript fulfills its promise. If the task was successful, it calls the resolve function you provided and passes along the result. If there was an error, it calls the reject function and provides the error information.

// - Now, you might wonder, how do you know when the promise is fulfilled? Well, you can use another function called then(). This function allows you to say, "When the promise is fulfilled, do this." You pass it a function that will be called with the result when the promise is successfully resolved.

// - To summarize, a promise in JavaScript is like making a deal with the language. It represents an asynchronous task that will finish in the future. You create a promise, provide functions to handle success and error, and then use the then() function to respond to the completion of the promise.

// LINK
// https://youtu.be/TnhCX0KkPqs

// Creating a promise
const myPromise = new Promise((resolve, reject) => {
  // Simulating an asynchronous task (e.g., fetching data from a server)
  setTimeout(() => {
    const randomNum = Math.random();

    if (randomNum < 0.5) {
      // Task succeeded, fulfill the promise with a result
      resolve("Success! The task completed.");
    } else {
      // Task failed, reject the promise with an error
      reject("Oops! Something went wrong.");
    }
  }, 2000); // Simulating a 2-second delay
});

// Using the promise
myPromise
  .then((result) => {
    console.log(result); // Success! The task completed.
  })
  .catch((error) => {
    console.log(error); // Oops! Something went wrong.
  });
