// Array Iterate 

const arr = [1, 2, 3, 4, 5];

// For loop
for (let i = 0; i < arr.length; i++) {
  const ele = arr[i];
  console.log(ele);
}

// While loop
let i = 0;
while (i < arr.length) {
  const ele = arr[i];
  console.log(ele);
  i++;
}

// For of loop (Recommended)
for (const ele of arr) {
  console.log(ele);
}

// For in loop (Not Recommended)
for (const i in arr) {
  const ele = arr[i];
  console.log(ele);
}
