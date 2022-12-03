// Function Returning Function

function father() {
  return function son(childName) {
    return console.log(`I am ${childName}`);
  };
}

const variable = father();
variable("Child function");
