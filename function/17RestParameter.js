// Rest Parameter

// Q.What is rest parameter?
// - In JavaScript, the rest parameter allows you to represent an indefinite number of arguments as an array within a function. It provides a concise way to handle multiple arguments without explicitly listing them individually.

// Q.Why use rest parameter?
// - The rest parameter is particularly useful when you want to handle functions with a variable number of arguments or when you don't know in advance how many arguments will be passed to a function. It provides flexibility and eliminates the need to define separate parameters for each argument.

function sum(...numbers) {
  let total = 0;

  for (let number of numbers) {
    total += number;
  }

  return total;
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15

// - In this example, the sum function uses the rest parameter, denoted by ...numbers. The rest parameter allows you to pass any number of arguments when calling the function. Inside the function, the rest parameter is treated as an array containing all the passed arguments. You can then perform operations on this array, such as calculating the sum of its elements.
// - When you call sum(1, 2, 3, 4, 5), the rest parameter numbers receives all the passed arguments as an array [1, 2, 3, 4, 5]. The function then iterates over the numbers array and calculates the sum, which is returned as the result.
