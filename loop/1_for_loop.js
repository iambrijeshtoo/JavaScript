// Topic: For loop

// Q. What is for loop?
// - A for loop in JavaScript is a programming construct that allows you to repeat a set of instructions a certain number of times. It's great for automating tasks that need to be done repeatedly.

// Q. Why use for loop?
// - Imagine you have a task you need to do over and over again. Instead of writing the same code multiple times, a for loop helps you perform that task a specific number of times, making your code more efficient and easier to manage.

// Q. How for loop work?
// - Initialization: You start by defining a variable and giving it an initial value. This variable will keep track of the loop's progress.
// - Condition: You specify a condition that, as long as it's true, the loop will continue to run. This condition is checked before every loop iteration.
// - Iteration: After each iteration of the loop, the loop variable is updated according to a certain pattern.
// - Instructions: Inside the loop, you put the instructions you want to repeat.
// - Update: After each iteration, the loop variable is updated following the specified pattern. The loop continues to run as long as the condition is true.

// Note
// - Make sure that your loop's condition becomes false at some point; otherwise, your loop will run indefinitely, causing your program to crash.

// Syntax
// for (initialization; condition; iteration) {
//  Instructions to repeat
// }

// Example
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Summary
// - A for loop in JavaScript helps you repeat a set of instructions a specific number of times. You provide an initial value, a condition to check before each iteration, and an iteration pattern. The loop runs as long as the condition is true. It's a useful tool for automating repetitive tasks and making your code more efficient. Just ensure your loop's condition eventually becomes false to avoid infinite loops.
