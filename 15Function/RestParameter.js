// Rest Parameter

// Using spread operator in parameter we can store more than one argument as array.
function father(parameter1, parameter2, ...parameter3) {
  console.log(parameter1);
  console.log(parameter2);
  console.log(parameter3);
  return;
}
father("value1", "value2", "value3", "value4");

function fun(...numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    total = number += number;
  }
  return total;
}
console.log(fun(1, 2, 3));
