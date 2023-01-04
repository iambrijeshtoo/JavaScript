// Topic: Object.assign()

/*
    # What is Object.assign()?
    - It is use to copying object and assign to another object.

    # Note
    - When we clone the object and assign it to another object after that if we made any changes to original object it doesn't effect to the cloned object.
*/

const object1 = {
  name1: "value1",
  name2: "value2",
  name3: "value3",
};

// Clone object using spread operator
const object2 = { ...object1 };
console.log(object2);

// Clone object using Object.assign()
const object3 = Object.assign({}, object1);
console.log(object3);

object1.name4 = "value4";
console.log(object1);
