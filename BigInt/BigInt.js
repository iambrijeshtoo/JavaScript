// Big Int

// # What is Big Int?
// - It's stand for big integer.
// - In JavaScript there is limit to store the number in variable.
// - By using the Big Int we can store larger number then the limit.

let a = BigInt(1000);
let b = 1000n

// NOTE:
// - When you create or convert any number into BigInt.
// - You can't perform any kind of operation with normal datatypes.
// - If you need to perform any kind of operation you need have both number to be BigInt.

let c = 1;
let d = 2;
console.log(c + d);