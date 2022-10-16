// Topic: String Template

// # What is String Template?
// - Normally we use string concatenation for join the two string or variable which contain string value.
// - In string template you can use ${variable} to concatenation them.

// # Why use String Template?
// - It easy and clean compare to string concatenation.

// # How to use String Template?
// ## Syntax:
// - ${ variable }

// NOTE:
// - You need to use `backtick`.
// - It will not work in single quote and double quote.

let name = "Brijesh";
let age = 23;

let aboutMe = `My name is ${name} and I am ${age} year old`;
console.log(aboutMe);