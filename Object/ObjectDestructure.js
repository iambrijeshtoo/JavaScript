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

// ## Nested Destructure

// Objects inside the array.
const students = [
  {
    rollNumber: 1,
    name: "student1",
    division: "A",
  },
  {
    rollNumber: 2,
    name: "student2",
    division: "B",
  },
];

// Taking objects and storing in different variable.
const [studentDetail1, studentDetail2] = students;
console.log(studentDetail1);
console.log(studentDetail2);

// Accessing specific key & value from the different objects.
const [{ rollNumber }, { name }] = students;
console.log(rollNumber);
console.log(name);

// Accessing specific key & value from the different objects and changing the variable name.
const [{ rollNumber: rno }, { division: div }] = students;
console.log(rno);
console.log(div);

/* 
    !NOTE:
    - When you see object inside the array and you are accessing different key and values from the different object.
    - It will give you the key and value according the index which are object stored.
    - Because all those object inside the array work as a element of the array.
*/
