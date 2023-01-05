// Topic : Bind

/* 
    # What is Bind?
    - It works same as call but it will return function.

    # Note
    - You need to store bind(); in variable and call in order to access it.
*/

function usingBind(objectName) {
  console.log(this.name1);
  console.log(objectName);
  console.log("Hello, World!");
}

const object1 = {
  name1: "Value1",
  name2: "Value2",
  name3: "Value3",
};

const object2 = {
  name1: "Value1",
  name2: "Value2",
  name3: "Value3",
};

const function1 = usingBind.bind(object1, ["I am object1"]); // (objectName for this, argument)
function1();

const function2 = usingBind.bind(object2, "I am object2");
function2();