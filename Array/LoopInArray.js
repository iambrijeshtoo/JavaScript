// Loops in arrays

const array = ["value1", "value2", "value3"];

// For loop
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  console.log(element);
}

// While loop
let i = 0;
while (i < array.length) {
  const element = array[i];
  console.log(element);
  i++;
}

// For in loop
for (const i in array) {
  const element = array[i];
  console.log(element);
}

// For of loop
for (const element of array) {
  console.log(element);
}
