// Spread Operator Object

const object1 = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
  sameKey: "sameValue1",
};

const object2 = {
  key4: "value4",
  key5: "value5",
  key6: "value6",
  sameKey: "sameValue2",
};

/* 
    !NOTE:
    - When both objects has same key but values are different and you combine them together to make one object.
    - At that time even if the keys are same but value will be consider(taken) from the only last object.
    - Because even though both have same key but latest update value will be considered from the last object.    
*/

// Add both objects into the one new object
const object3 = { ...object1, ...object2 };
console.log(object3);

// Add both objects into the one new object and key value pair
const object4 = { ...object1, ...object2, key7: "value7" };

// When array is added into the object at that time array index will be key and element will be value
const array = [1, 2, 3];
const object5 = {
  ...array,
};
console.log(object5);
