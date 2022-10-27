// Operator Precedence

// # What is Operator Precedence?
// - When the arithmetic operation is done it give first priority to * and /.
// - Later it will count + and -.
// - * / - + this is path it follow when doing the operation.

// # How the default Operator Precedence work?
// - It calculate first 5*5 and then do 10 addition.
var a = 5 * 5 + 10;
console.log(a);

// # What if you want do + and - first?
// - In some case you have to do some certain operations first.
// - At that case you need to use () to cover the operands which you need to do math operations first.

// # How use ()?
// - As you see it will not default take multiplication first.
// - But it will take the addition part first which is cover in ().
var a = (5 + 5) * 10;
console.log(a); 

// # What if you have same level of Operator in the expression?
// - If you have same level of Operator like + and - only in the hole expression and same goes for * and /.
// - It will calculate from left to right.
var a = 5 + 5 - 10;
console.log(a);