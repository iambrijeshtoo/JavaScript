// Single Object Destructure

const object = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
  nestedObject: {
    key4: "value4",
    key5: "value5",
  },
};

// Manually object destructure
// const variable1 = object.key1;
// const variable2 = object.key2;
// const variable3 = object.key3;

// Easily object destructure
const {
  customName: variable1, // Giving custom name using alias to the key
  variable2,
  variable3,
  nestedObject: { customName1: key4, key5 }, // Accessing nested object which is property
} = object;

// Create new object from the existing object use spread operator
const { ...object1 } = object;
console.log(object1);
