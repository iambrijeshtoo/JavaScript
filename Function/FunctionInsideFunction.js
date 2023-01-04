// Function Inside Function

let name = "abc";

function father() {
  function son(number1, number2) {
    let answer = number1 + number2;
    return answer;
  }
  console.log(son(1, 2));
}

father();
