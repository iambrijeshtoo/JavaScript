// Method: Method

// Q.What is method?
// - When you write function inside object it is known as method.
// - When you write function inside class it is known as method.

const object1 = {
  name1: "Value1",
  name2: "Value2",
  name3: function () {
    console.log("Hello, World!");
  },
};
object1.name3();
