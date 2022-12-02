// Parameter Destructuring

// Taking values from object and pass to function as parameters.
const student = {
  firstName: "Batman",
  rollNumber: 10,
  division: "A1",
};

function studentDetails({ firstName, rollNumber, division }) {
  console.log(firstName);
  console.log(rollNumber);
  console.log(division);
  return;
}
studentDetails(student);
