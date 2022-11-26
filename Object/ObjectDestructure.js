// Object Destructure

// Manual object destructure
const object1 = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};
const key1 = object1.key1;
const key2 = object1.key2;
const key3 = object1.key3;
console.log(key1);
console.log(key2);
console.log(key3);

// Easy way
const object2 = {
  key4: "value4",
  key5: "value5",
  key6: "value6",
};

const { key4, key5 } = object2;
console.log(key4);
console.log(key5);

// Create new object from the existing object
const { ...object3 } = object2;
console.log(object3);