// students destructure

const students = ["Student1", "Student2", "Student3"];

// Dry syntax
let student1 = students[0];
let student2 = students[1];
let student3 = students[2];
console.log(student1);
console.log(student2);
console.log(student3);

// Better syntax
let [student4, student5, student6] = students;
console.log(student4);
console.log(student5);
console.log(student6);

// Store element in variable and create new array using remaining elements
let [student7, ...newStudents] = students;
console.log(student7);
console.log(newStudents);

// Skip element value when store array elements inside variables.
let [student8, , student9] = students;
console.log(student8);
console.log(student9);
