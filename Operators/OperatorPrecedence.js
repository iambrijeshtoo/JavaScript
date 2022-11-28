// Operator Precedence

// Default first calculate * and / then comes + and -
let operation1 = 2 * 2 + 1;
let operation2 = 4 / 2 - 1;
console.log(operation1);
console.log(operation2);

// Manually calculate first + and - use (expression)
let operation3 = 2 * (2 + 1);
let operation4 = 4 / (2 - 1);
console.log(operation3);
console.log(operation4);

// Number + String
let studentName = "Batman";
let rollNumber = 123;
console.log(studentName + rollNumber);

// Number + Number + String
let number1 = 10;
let number2 = 20;
let name = "Batman";
console.log(number1 + number2 + name);

// String + Number + Number
console.log(name + number1 + number2);
