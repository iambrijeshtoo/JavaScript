// Function Inside Function

function parent() {
  // Default function
  function add(num1, num2) {
    return num1 + num2;
  }

  // Function expression
  const div = function (num1, num2) {
    return num1 / num2;
  };

  // Arrow function
  const sub = (num1, num2) => {
    return num1 - num2;
  };

  // Arrow function in one line
  const mul = (num1, num2) => num1 * num2;
}