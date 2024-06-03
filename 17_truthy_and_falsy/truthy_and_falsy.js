// Falsy value
// false
// 0
// -0
// BigInt 0n
// ""
// null
// undefined
// NaN

// Truthy value
// - Any value other than falsy.
// "0"
// "false"
// " "
// []
// {}
// function(){}

// For CP and Interview
// false == 0 -> true
// false == "" -> true
// 0 == "" -> true

const emptyArray = [];
if (emptyArray.length === 0) {
  console.log("Array is empty");
}

const emptyObject = {};
if (Object.keys(emptyObject).length === 0) {
  console.log("Objet is empty");
}
