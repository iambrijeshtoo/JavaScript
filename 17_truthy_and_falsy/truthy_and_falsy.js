// Truthy VS Falsy

// Falsy value: Any value which is treated as a false. Known as a falsy value.
// false
// 0
// -0
// BigInt 0n
// Empty string: ""
// null
// undefined
// NaN

if (0) {
  console.log("code executed");
}

// Truthy value: Any value other than falsy.
// "0"
// "false"
// String with white space: "    "
// []
// {}
// function(){}

const emptyArray = [];
if (emptyArray.length === 0) {
  console.log("Array is empty");
}

const emptyObject = {};
if (Object.keys(emptyObject).length === 0) {
  console.log("Objet is empty");
}

// For Interview
// false == 0 -> true
// false == -0 -> true
// false == 0n -> true
// false == "0" -> true
// false == "" -> true

// false == null -> false
// false == undefine -> false
// false == NaN -> false
const result = false == NaN;
console.log(result);
