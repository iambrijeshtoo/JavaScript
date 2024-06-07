// Constructor Function

// - Yes, in JavaScript, you can create constructor functions without using the class keyword or the constructor keyword. Instead, you can define a regular function and manually assign properties and methods to the newly created object using the this keyword.

function ConstructorFunction(para1, para2) {
  this.para1 = para1;
  this.para2 = para2;

  return console.log(this.para1, this.para2);
}

const obj = new ConstructorFunction("value1", "value2");

console.log(obj);
