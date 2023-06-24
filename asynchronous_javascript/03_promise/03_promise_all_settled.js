// Promise.allSettled()

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 fulfilled");
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 2 rejected");
  }, 1500);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3 fulfilled");
  }, 1000);
});

Promise.allSettled([promise1, promise2, promise3]).then((results) => {
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Promise ${index + 1}: ${result.value}`);
    } else if (result.status === "rejected") {
      console.log(`Promise ${index + 1}: ${result.reason}`);
    }
  });
});

// Output:
// Promise 1: Fulfilled promise
// Promise 2: Rejected promise
// Promise 3: Another fulfilled promise