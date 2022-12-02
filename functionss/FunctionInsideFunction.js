// Function Inside Function

function math() {
  function sum(number1, number2) {
    let answer = number1 + number2;
    return answer;
  }
  console.log(sum(1, 2));
}

math();
