// Function Expression

/* 
    # What is function expression?
    - Storing function inside the variable.
*/

const greetings = function () {
  console.log("Hello, World!");
};
greetings();

const addTwoNumbers = function (number1, number2) {
  return number1 + number2;
};

const answer = addTwoNumbers(1, 2);
console.log(answer);