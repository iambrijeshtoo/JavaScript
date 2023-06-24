// Promise.race()

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 2 rejected");
  }, 1500);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3 resolved");
  }, 1000);
});

Promise.race([promise1, promise2, promise3])
  .then((result) => {
    console.log(`First promise settled: ${result}`);
  })
  .catch((error) => {
    console.log(`First promise error: ${error}`);
  });

// Output:
// First promise settled: Promise 3 resolved
