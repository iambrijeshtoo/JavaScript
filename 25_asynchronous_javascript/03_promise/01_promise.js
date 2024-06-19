// Promise

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

myPromise
  .then((result) => {
    console.log(result); // Success! The task completed.
  })
  .catch((error) => {
    console.log(error); // Oops! Something went wrong.
  });
