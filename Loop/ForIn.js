// For in loop

// Array > for in > index
const students = ["Batman", "Superman", "Flash"];

for (const i in students) {
  console.log(i);
  console.log(students[i]);
}

// Objects > for in > key
const studentDetails = {
  studentName: "Batman",
  rollNumber: 10,
  division: "Justice League",
};

for (const i in studentDetails) {
  console.log(i);
  console.log(studentDetails[i]);
}
