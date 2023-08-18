const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Step 1: Prompt the user for a number
rl.question("Enter a positive number: ", function (answer) {
  const num = parseInt(answer);

  // Step 2: Initialize a variable to store the sum
  let sum = 0;

  // Step 3: Use a for loop to calculate the sum
  for (let i = 1; i <= num; i++) {
    sum += i;
  }

  // Step 4: Display the result
  console.log(`The sum of numbers from 1 to ${num} is ${sum}`);

  rl.close();
});
