// Function Scope VS BlockScope

// let and const are block scope
// var is function scope

function greet1() {
  if (true) {
    let name = "Batman";
    console.log(name);
  }
  // return console.log(name);
}
greet1();

function greet2() {
  if (true) {
    const name = "Batman";
    console.log(name);
  }
  // return console.log(name);
}
greet2();

function greet3() {
  if (true) {
    var name = "Flash";
    console.log(name);
  }
  return console.log(name);
}
greet3();
