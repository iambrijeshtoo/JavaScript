// Array

// Create empty array and then add element.
const studentName = [];
studentName[0] = "Student1";
studentName[1] = "Student2";
studentName[2] = "Student3";
console.log(studentName);

// Create array from the object.
const studentDetails = new Array("Student1", "Student2", "Student3");
console.log(studentDetails);

// Default way creating array.
const students = ["Student1", "Student2", "Student3"];

// Accessing element from array.
console.log(students[0]);

student = students[0];
console.log(student);

// Adding element to array.
students[3] = "Student4";
console.log(students);

// Updating element in array.
students[3] = "newStudent4";
console.log(students);

// Push element to array.
students.push("Student5");
console.log(students);

// Pop element from array.
students.pop("Student5");
console.log(students);

// Shift element to array.
students.shift("Student1");
console.log(students);

// Unshift element to array.
students.unshift("Student1");
console.log(students);

// Spread operator in array.
const classRoom = [...students];
// classRoom = [...students, "Student4"];
console.log(classRoom);
