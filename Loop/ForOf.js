// For of loop

// Array > for of > element
const students = ["Batman", "Superman", "Flash"];

for (const i in students) {
  console.log(i);
  console.log(students[i]);
}

// Objects > for of > Object.keys(objectName) > key > objectName[key] > value
const studentDetails = {
  studentName: "Batman",
  rollNumber: 10,
  division: "Justice League",
};
for (const i of Object.keys(studentDetails)) {
  console.log(studentDetails[i]);
}
