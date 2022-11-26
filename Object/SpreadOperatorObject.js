// Spread Operator Object

const object1 = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

const object2 = {
  key4: "value4",
  key5: "value5",
  key6: "value6",
};

// const object3 = { ...object1, ...object2 };
const object3 = { ...object1, ...object2, key7: "value7" };
console.log(object3);

/* 
    !NOTE:
    - Suppose there is two object which you have to combine.
    - Using spread operator you can combine both of them.
    - But what if they both have same key inside it and values are different.
    - When combine this type of objects together what will happen that last object in line of combine.
    - It's key value will get update.

    # Convert array into the object
    - When you add array into the object at that time arrays element will be convert into the value and the index will became the key for that element.
*/
const array = [1, 2, 3];
const object4 = {
  ...array,
};
console.log(object4);
