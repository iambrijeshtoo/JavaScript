// Single Object Destructure

// Manually object destructure
const object1 = {
  name1: "value1",
  name2: "value2",
  name3: "value3",
};
const var1 = object1.name1;
const var2 = object1.name2;
const var3 = object1.name3;
console.log(var1);
console.log(var2);
console.log(var3);

// Easily object destructure
const object2 = {
  name4: "value4",
  name5: "value5",
  name6: "value6",
};
const { var4, var5, var6 } = object2;
console.log(var4);
console.log(var5);
console.log(var6);

// Create new object from the existing object use spread operator
const { ...object3 } = object2;
console.log(object3);
