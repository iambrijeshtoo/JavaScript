// Operator Precedence

// # What is Operator Precedence?
// - When the arithmetic operation is done it give first priority to * and /.
// - Later it will count + and -.
// - * / - + this is path it follow when doing the operation.

// # How the default Operator Precedence work?
// - It calculate first 5*5 and then do 10 addition.
let a = 5 * 5 + 10;
console.log(a);

// # What if you want do + and - first?
// - In some case you have to do some certain operations first.
// - At that case you need to use () to cover the operands which you need to do math operations first.

// # How use ()?
// - As you see it will not default take multiplication first.
// - But it will take the addition part first which is cover in ().
let b = (5 + 5) * 10;
console.log(b);

// # What if you have same level of Operator in the expression?
// - If you have same level of Operator like + and - only in the hole expression and same goes for * and /.
// - It will calculate from left to right.
let c = 5 + 5 - 10;
console.log(c);

// # What if you add number and string?
// - If you add number and string datatype output will string.

// ## Number + String
let d = "ABC";
let e = 123;
console.log(d + e);

// ## Number + Number + String
// - As you know arithmetic operations done from left to right.
// - That's why it will sum the two value just like any normal operation.
// - In last when it will convert in string format.
let f = 1;
let g = 2;
let h = "ABC";
console.log(f + g + h);

// ## String + Number + Number
// - In arithmetic operation when string is the first left side.
// - Hole operation now will convert to string.
console.log(h + g + f);
