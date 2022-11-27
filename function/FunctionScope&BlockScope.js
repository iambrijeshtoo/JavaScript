// Function Scope VS BlockScope

/* 
    # What is block scope?
    - Let just start with what is block?
    {
        BLOCK 1
    }
    {
        BLOCK 2
    }
    - Which ever written inside the "{ }" is known as block.
    - Let and const are block scope.
    - Var is function scope.
*/

/*
    # Let block scope
    - You can't access the name variable outside the if condition block.
*/
if (true) {
  let name = "Batman";
  console.log(name);
}
// console.log(name); // ERROR

/* 
    # Const block scope
    - You can't access the name variable outside the if condition block.
*/
if (true) {
  const name = "Superman";
  console.log(name);
}
// console.log(name); // ERROR

/* 
    # Var function scope
    - You can access the name variable any where.
*/
function greet() {
  var name = "Flash";
  return console.log(name);
}
console.log(name);
