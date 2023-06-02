// Parameter Destructuring

// Q.What is parameter destructuring?
// - Parameter destructuring in JavaScript is a way to extract values from an object or an array and assign them to variables in a more concise and convenient manner. It allows you to "destructure" the data structure and directly access its individual values without manually accessing them using dot notation or indexing.

// Q.Why use parameter destructing?
// - Parameter destructuring simplifies the process of extracting values from objects and arrays, making your code more concise and readable. It eliminates the need for explicit assignments and reduces the amount of code required to access individual values.

// 1. Object Destructuring:
// - When a function has an object as a parameter, you can use parameter destructuring to extract specific values from the object.

// Without destructuring
function printPerson(person) {
  var name = person.name;
  var age = person.age;

  console.log(name + " is " + age + " years old.");``
}

// With destructuring
function printPerson({ name, age }) {
  console.log(name + " is " + age + " years old.");
}

// 2. Array Destructuring

// Without destructuring
function printNumbers(numbers) {
  var firstNumber = numbers[0];
  var secondNumber = numbers[1];

  console.log("The first number is " + firstNumber + ".");
  console.log("The second number is " + secondNumber + ".");
}

// With destructuring
function printNumbers([firstNumber, secondNumber]) {
  console.log("The first number is " + firstNumber + ".");
  console.log("The second number is " + secondNumber + ".");
}
