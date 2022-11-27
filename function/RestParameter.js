// Rest Parameter

/* 
    # What is rest parameter?
    - Normally when we give parameter to function and pass argument(value) it only take one value at time.
    - By using rest parameter will take array as argument.
    - So you can multiple argument(value) to one single parameter.

    # How to use rest parameter?
    - We use spread operator "..." and create parameter name.

    # Syntax:
    function functionName (parameter1, parameter2, ...parameter3){
        return;
    }
*/

/* 
    !NOTE:
    - In the below example we are passing three argument into this three parameter.
    - At the 3rd parameter we are passing more that one name.
    - It will take all the extra name and create an array.
*/
function studentName(student1, student2, ...student3) {
  console.log(student1);
  console.log(student2);
  console.log(student3);
  return;
}
studentName("Batman", "Superman", "Flash", "Black adam");

/* 

*/
function sum(...numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    total = number += number;
  }
  return total;
}

console.log(sum(1, 2, 3));
