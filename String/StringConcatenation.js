// Topic: String Concatenation

// # What is String Concatenation?
// - When we add two String together became one single string.

// # Why use String Concatenation?
// - Example:
// - You have created form and there is one field for first name and second field for last name.
// - Now you have to show user full name on profile you will use String Concatenation to join both name and show full name.

// # How to use String Concatenation?
// - You add + symbol between variable to String Concatenation them.

let firstName = "Brijesh";
let lastName = "Chavda";
let fullName = firstName + " " + lastName;
console.log(fullName);

// # NOTE:
// - When you have both number as a String and you need to perform addition.

// - You can't just do as math.
let number1 = "10";
let number2 = "20";
let addition = number1 + number2
console.log(addition);

// - You need to add + at the front of both variable
let number3 = "30";
let number4 = "40";
let addition2 = +number3 + +number4
console.log(addition2);


