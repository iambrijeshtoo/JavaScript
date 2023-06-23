// Call Method

// Q. What is call?
// - When we want to give some functionality to the object. We have to define a method in the object. If the other objects need same functionality. We need to define same method for them. Now this kind of work became repetitive. If we use call method we can actually use the object one functionality/ method to other objects directly. Also we can pass parameters according to object needs.

// NOTE
// - It can be used to invoke (call) a method with an owner object as an argument (parameter).
// - With call(), an object can use a method belonging to another object.
// - You can actually call function using functionName.call();

// SYNTAX
// mainObject.method.call(object, parameter)

const obj1 = {
  fun: function (para) {
    console.log(this.name);
    console.log(para);
  },
};

const obj2 = {
  name: "value2",
};

const obj3 = {
  name: "value3",
};

obj1.fun.call(obj2, "para");
obj1.fun.call(obj3, "para");
