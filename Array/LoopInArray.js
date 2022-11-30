// Loops in arrays

const students = ["Student1", "Student2", "Student3"];

// For loop
for (let i = 0; i < students.length; i++) {
  const element = students[i];
  console.log(element);
}

// While loop
let i = 0;
while (i < students.length) {
  const student = students[i];
  console.log(student);
  i++;
}

// For in loop
for (const i in students) {
  const student = students[i];
  console.log(student);
}

// For of loop
for (const student of students) {
  console.log(student);
}
