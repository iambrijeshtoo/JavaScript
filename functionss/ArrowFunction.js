// Arrow Function

// Arrow function
const greet = () => {
  console.log("Hello, World!");
};

// For single parameter to pass in function you can remove small bracket.
const greetWithCustomName = (name) => {
  return console.log(`Hello ${name}`);
};

// When function returns something in single line remove return keyword.
const greetWithStudentName = (studentName) =>
  console.log(`Hello ${studentName}`);
