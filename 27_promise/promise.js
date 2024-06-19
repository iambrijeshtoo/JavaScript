const promise1 = new Promise(function (resolve, reject) {
  // Do async task
  // Database call, cryptography, network

  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promise1.then(function () {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "test user", email: "abc@example.com" });
  }, 1000);
});

promise3.then(function (user) {
  console.log(user);
});

const promise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;

    if (!error) {
      resolve({ username: "test user", email: "abc@example.com" });
    } else {
      reject("ERROR: Something went wrong ");
    }
  }, 1000);
});

promise4
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise has been resolved or rejected");
  });

const promise5 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;

    if (!error) {
      resolve({ username: "test user 2", email: "abc@example.com" });
    } else {
      reject("ERROR: test 2 went wrong ");
    }
  }, 1000);
});

async function consumePromise5() {
  try {
    const response = await promise5;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromise5();

// async function getAllUser() {
//   try {
//     const response = await fetch("https://api.github.com/users/iambrijeshtoo");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Error");
//   }
// }

// getAllUser();

fetch("https://api.github.com/users/iambrijeshtoo")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally();
