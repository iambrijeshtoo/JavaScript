// Rest Parameter

// Using spread operator in parameter we can store more than one argument as array.
function studentName(student1, student2, ...student3) {
  console.log(student1);
  console.log(student2);
  console.log(student3);
  return;
}
studentName("Batman", "Superman", "Flash", "Black adam");

function sum(...numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    total = number += number;
  }
  return total;
}
console.log(sum(1, 2, 3));
