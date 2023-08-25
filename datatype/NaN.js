// NaN (Not a Number)

// What
// - `NaN` stands for "Not-a-Number." It's a special value in JavaScript that shows up when you do something that doesn't make sense with numbers.

// Why
// - JavaScript uses NaN to tell you when a math operation can't give a proper number answer, like dividing zero by zero.

// How
// - When you try to do math with things that aren't numbers, like dividing text by a number, you get NaN. It's like JavaScript's way of saying "I can't give you a real number because this doesn't work."

// Note
// - Be careful with NaN. If you use it in a calculation, the final result will also be NaN. Also, comparing NaN with other NaN values using === won't work as expected.

// Example
let division = 0 / 0; // This division results in NaN
console.log(division); // Output: NaN

// NaN in Comparisons
// - For example, NaN === NaN returns false, and NaN !== NaN returns true. To check if a value is NaN, use the isNaN() function or the Number.isNaN() static method.

let result = 0 / 0; // This division results in NaN
console.log(result); // Output: NaN
console.log(typeof result); // Output: "number"

console.log(isNaN(result)); // Output: true
console.log(result === NaN); // Output: false
console.log(result !== NaN); // Output: true

console.log(Number.isNaN(result)); // Output: true

// - It's important to handle NaN in your code, especially when dealing with user input or calculations, to ensure that your program behaves as expected and doesn't produce unexpected results due to the presence of NaN.
