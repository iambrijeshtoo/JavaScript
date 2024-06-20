// Prototype (Better to call Prototype Object)

// Inheritance: In JavaScript is a mechanism that allows one object to acquire properties and methods of another object. This is primarily achieved through the prototype chain.

// Prototype: In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification), that is either null or references another object. That object is called “a prototype”:

// Prototype Inheritance: When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”.

// What
// - Prototype is object.
// - Other objects inherit properties and methods from the prototype.
// - Every object in JavaScript has a prototype.

// Why
// - The prototype system allows JavaScript to implement inheritance and to share properties and methods across instances.
// - This makes code reuse and object - oriented programming possible in JavaScript.

// How

// Function Are Object
// - Yes, function are object.
// - Yes, function is function.
// - In JavaScript everything is object.

function regularFunction(parameter) {
  console.log(parameter);
}

// Normally calling function
console.log(regularFunction("argument"));

// Adding property into function like an object
regularFunction.power = 2;
console.log(regularFunction.power);

// Prototype in function
console.log(regularFunction.prototype);

// Note
// - Every object in JavaScript inherit properties and method of parent object. It continues.
// Object <- (Prototype + Inheriting) <- Parent Object <- (Prototype + Inheriting) <- Grand Parent Object

// Array <- (Prototype + Inheriting) <- Object <- .length
// array.prototype.length === array.length

// - This why function can behave like an object.
// Function <- (Prototype + Inheriting) <- Object

// - If you wondering what will you get at the end of this prototype inheritance chain is `null`.

function regularFunction(parameter) {
  this.parameter = parameter;
}

regularFunction.prototype.method = function () {
  this.parameter++;
};

regularFunction.prototype.printMethod = function () {
  console.log(this.parameter);
};

const object1 = new regularFunction("argument");
const object2 = new regularFunction("argument");
