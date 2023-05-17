// Object Create Method

// Q.What is Object.create(); method ?
// - In other programming languages when you want to create an object you need to create a class and then after you can create the object of that class. But in JavaScript you can actually create object as datatype. So don't have to create class. The "Object.create()" method will create object.

// NOTE
// Q.Why object is known as object?
// - In simple terms you can think object is name and value pair that store data. But in OOPs there is object also. This object and OOPs object are the same object. Because in OOPs object store data in heap and stack. In heap store address and in stack store the value. Same thing happens in object it also store data in name and value form.

// - object
// name: value

// - OOPs object
// heap: stack (address: value)

// - object === OOPs object
// - name: value === heap: stack

const mainObject = {
  name1: "value1",
  name2: "value2",
};

// Creating new object from main object
const object1 = Object.create(mainObject);
console.log(object1.name1);
console.log(object1.name2);

// Creating new object form main object and overriding all the value
const object2 = Object.create(mainObject);
object2.name1 = "foo";
object2.name2 = "bar";

console.log(object2.name1);
console.log(object2.name2);
