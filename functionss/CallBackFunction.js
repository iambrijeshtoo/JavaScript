// Callback Function

// Function take other function as a parameter.
function child(childName) {
  console.log(`I am ${childName}`);
}

function parent(callback) {
  console.log(`I am parent function`);
  callback("child function");
}

parent(child);
