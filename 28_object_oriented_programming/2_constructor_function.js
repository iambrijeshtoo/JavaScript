// Constructor Function

// What is Construction Function?
// - Yes, in JavaScript, you can create constructor functions without using the class keyword or the constructor keyword. Instead, you can define a regular function and manually assign properties and methods to the newly created object using the this keyword.

function ConstructorFunction(parameter1, parameter2) {
  // left side variable = right side parameter
  this.parameter1 = parameter1;
  this.parameter2 = parameter2;

  this.method = function () {
    console.log(this.parameter1);
    console.log(this.parameter2);
  };

  return this;
}

// Creating new instance
const object = new ConstructorFunction("value1", "value2");
// console.log(object);


