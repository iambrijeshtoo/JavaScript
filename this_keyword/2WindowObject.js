// Window Object

// Q. What is window object?
// - JavaScript is object oriented. Which mean there should me one main object. This main object known as window object. Everything you declare variable, array, object and function etc, It get store in window object. Every keyword and inbuilt property, method you use it comes from window object. To prove this we need to use this keyword. As you know that this keyword point to the current object. If you just print the this keyword it will print the window object.

console.log(this);

function greet() {
  console.log("Hello, World!");
}

greet(); // In front
window.greet(); // In Background
