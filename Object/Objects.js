// Objects

/* 
  # What is Object?
  -> Object is variable too. But it store more than one value. It store values in "key: value" pair. In object you can store numbers, strings, boolean values, variables, array, function and nested objects also.

  NOTE:
  -> It is common practice to declare objects with const keyword.

  Syntax:
  const object = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};
*/

const student = {
  name: "Student1",
  rollNumber: 1,
  result: true,
  subjects: ["Math", "Science", "English"],
  subjectTeachers: {
    math: "Math teacher",
    science: "Science teacher",
    English: "English teacher",
  },
  attendance: function (studentName) {
    console.log(`${studentName} is Present`);
  },
};

// Accessing values from the object
console.log(student.name);
console.log(student.subjects);
console.log(student.subjects[0]);
console.log(student.subjectTeachers);
console.log(student.subjectTeachers.math);
console.log(student.subjectTeachers["math"]);
console.log(student.attendance("Student1"));

// Adding key and value pair in object
// Using dot operator
student.division = "A";

// Using bracket (When your key name has whitespace)
student["School Name"] = "ABC School";
console.log(student);

// Accessing key-name from the variable
const tuitionVariable = "tuition";
student[tuitionVariable] = "ABC Tuition";
console.log(student);
