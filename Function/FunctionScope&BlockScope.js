// Function Scope VS BlockScope

// let and const are block scope
function greet1() {
  if (true) {
    let name = "Human";
    console.log(name);
  }
  // return console.log(name);
}
greet1();

function greet2() {
  if (true) {
    const name = "Human";
    console.log(name);
  }
  // return console.log(name);
}
greet2();

// var is function scope
function greet3() {
  if (true) {
    var name = "Human";
    console.log(name);
  }
  return console.log(name);
}
greet3();
