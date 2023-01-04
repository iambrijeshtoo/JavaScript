// Topic : Call

/* 
    # What is call?
    - When we want to give some functionality to the object. We have to define a method in the object. 
    - If the others object need same functionality we need to also define a method for them. 
    - Now this kind of work became repetitive.
    - If we use call method we can actually use the object one functionality to other objects directly.
    - Also we can pass parameters according to object needs.

    # Note
    - You can actually call function using functionName.call();
*/

const object1 = {
  name1: "Value1",
  name2: "Value2",
  name3: "Value3",
  // We can also write this function outside the object and it work same.
  usingCall: function (objectName) {
    console.log(this.name1);
    console.log(objectName);
    console.log("Hello, World!");
  },
};

const object2 = {
  name1: "Value1",
  name2: "Value2",
  name3: "Value3",
};

// object1.usingCall.call(); === object1.usingCall();
object1.usingCall.call(object1, "I am object1"); // (objectName for this, argument)
object1.usingCall.call(object2, "I am object2"); // Calling object 1 method for object 2
