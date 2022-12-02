// Function Returning Function

function parent() {
  return function child(childName) {
    return console.log(`I am ${childName}`);
  };
}

const variable = parent();
variable("Child");
