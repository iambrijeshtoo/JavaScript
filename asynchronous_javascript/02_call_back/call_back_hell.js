// Call back function

// https://youtu.be/bx9xYPt2tdc

// Function 1
function firstFunction(callback) {
  setTimeout(function () {
    console.log("First function executed.");
    callback();
  }, 1000);
}

// Function 2
function secondFunction(callback) {
  setTimeout(function () {
    console.log("Second function executed.");
    callback();
  }, 1000);
}

// Function 3
function thirdFunction(callback) {
  setTimeout(function () {
    console.log("Third function executed.");
    callback();
  }, 1000);
}

// Callback Hell
firstFunction(function () {
  secondFunction(function () {
    thirdFunction(function () {
      console.log("All functions executed.");
    });
  });
});
