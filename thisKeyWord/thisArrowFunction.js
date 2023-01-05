// Topic: this keyword for arrow functions

/* 
    Note
    - this keyword actually represents the current object. But this true for normal functions.
    - For arrow functions it will be one level upper object meaning it will point to the one level upper object.
*/

const object = {
  name1: "Value1",
  name2: "Value2",
  name3: "Value3",
  function1: () => {
    console.log(this);
    console.log(this.name1);
  },
};
object.function1();
