const a = 0;
console.log(-Math.abs(a));

// function makeNegative(num) {
//   return -Math.abs(num);
// }

// console.log(makeNegative(0));

function makeNegative(num) {
  return num < 0 ? num : -num;
}

console.log(makeNegative(0));