// Prototype

// Q. What is prototype word mean?
// - Prototype it's the first model which is created. By using the prototype as reference other model are created.

// Q. What is Prototype?
// - in JavaScript, a prototype is an object that other objects can inherit properties and methods from. It acts as a blueprint or template for creating new objects.

// Q. How the Prototype work?
// - When you create an object in JavaScript, it is linked to a prototype object. If you try to access a property or method on the object and it doesn't exist, JavaScript will look for it in the prototype object.

// Q. Why use Prototype?
// - Using prototypes, you can share properties and methods among multiple objects without duplicating them. This promotes code reusability and helps save memory.

// NOTE
// - In JavaScript function are treated as object.
// - You can add properties to function. 

function fun() {}

// `name` property return function name
console.log(fun.name);

// Adding property in function just like an object.
fun.property = "Property";
console.log(fun.property);

// `property` is only available for function
console.log(fun.prototype);

