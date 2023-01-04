// Topic: Optional chaining

/*
    # What is optional chaining?
    - We use dot operator for accessing value from object.
    - Sometime we need value from object which is does not exist yet but in future it will be there.
    - At that time you use dot operator to access the value it will give the error.
    - You need to use optional chaining "?." it will work same as dot operator but it return undefine if there is not object rather than giving the error.
*/

const object1 = {
  name1: "value1",
  name2: "value2",
};

console.log(object1.name1);
console.log(object1?.name3);
