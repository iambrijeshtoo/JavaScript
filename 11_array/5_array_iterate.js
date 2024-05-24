// Array Iterate 

const myArray = [1, 2, 3, 4, 5];

// For loop
for (let i = 0; i < myArray.length; i++) {
  const ele = myArray[i];
  console.log(ele);
}

// While loop
let i = 0;
while (i < myArray.length) {
  const ele = myArray[i];
  console.log(ele);
  i++;
}

// For of loop (Recommended)
for (const ele of myArray) {
  console.log(ele);
}

// For in loop (Not Recommended)
for (const i in myArray) {
  const ele = myArray[i];
  console.log(ele);
}
