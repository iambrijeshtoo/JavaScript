// Prototype (Better to call Prototype Object)

// Research
// - How javascript add hidden property which is [[Prototype]]. To my object?

// What

// Inheritance
// - Concept: A mechanism where a new object (child) acquires properties and methods from an existing object (parent).
// - Purpose: Code reuse and creating hierarchical relationships between objects.
// - Mechanism: In JavaScript, primarily achieved through the prototype chain.

// __proto__
// - Objects have a special hidden property which is __proto__
// - This will be either null or references another object.

// Prototype
// - The referred object in the __proto__ property is known as prototype.

// Prototype Chain
// - Mechanism: A linked list of objects where each object inherits properties and methods from its prototype.
// - Structure: Every object has a __proto__ property pointing to its prototype.
// - Process: When a property is accessed on an object, the JavaScript engine first checks the object itself, then its prototype, and so on until the end of the chain or the property is found.

// Prototype Inheritance: When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”.

// parentObject is prototype.
const parentObject = {
  name: "Parent",
};

// __proto__ is the hidden property in childObject that store the parent object.
const childObject = {
  __proto__: parentObject,
  name: "Child",
};

console.log(childObject.name);
console.log(childObject.__proto__.name);

// Why
// - The prototype system allows JavaScript to implement inheritance and to share properties and methods across instances.
// - This makes code reuse and object - oriented programming possible in JavaScript.

// How

// Function Are Object
// - Yes, function are object.
// - Yes, function is function.
// - In JavaScript everything is object.

function ConstructorFunction(parameter) {
  console.log(parameter);
}

// Normally calling function
console.log(ConstructorFunction("argument"));

// Adding property into function like an object
ConstructorFunction.power = 2;
console.log(ConstructorFunction.power);

// Prototype in function
console.log(ConstructorFunction.prototype);

// Note
// - Every object in JavaScript inherit properties and method of parent object. It's continues process.
// Object <- (Prototype + Inheriting) <- Parent Object <- (Prototype + Inheriting) <- Grand Parent Object

// Array <- (Prototype + Inheriting) <- Object <- .length
// array.prototype.length === array.length

// - This why function can behave like an object.
// Function <- (Prototype + Inheriting) <- Object

// - If you wondering what will you get at the end of this prototype inheritance chain is `null`.

// Constructor Function + Prototype + `new` keyword
function ConstructorFunction(parameter) {
  this.parameter = parameter;
}

ConstructorFunction.prototype.method = function () {
  this.parameter++;
};

ConstructorFunction.prototype.printMethod = function () {
  console.log(this.parameter);
};

const instanceObject1 = new ConstructorFunction("argument");
const instanceObject2 = new ConstructorFunction("argument");
