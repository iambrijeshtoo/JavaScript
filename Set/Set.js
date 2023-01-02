// Topic: Set

/*
    # What is set?
    - It's iterable.
    - It's array like object.
    - It requires unique element.
    - It store data in linear form.
    
    # Note
    - It can't access element using index.
    - It can't have duplicate value.
    - Element order can't be guaranteed.
    - When array is store in variable and you use that variable to add array in set two times it will store only one time. Because set doesn't allow duplicate value and the address will be the same for array.
    - In other hand if you have two different variables and they both have array stored inside it and both have same value. Then you try to add both array in set they will treat as two separate array even though they have same value. Because address is different.
*/

// Syntax
// Direct passing value
const rollNumber = new Set([1, 2, 3, 4, 5]);
console.log(rollNumber);

const studentName = new Set("Batman");
console.log(studentName);

// Using constructor
const studentNames = new Set();
// Add();
studentNames.add("Batman");
studentNames.add("Superman");
studentNames.add("Flash");
console.log(studentNames);

// has();
if (studentNames.has("Batman")) {
  console.log("I am Batman");
} else {
  console.log("Not found");
}

// Iterable
for (student of studentNames) {
  console.log(student);
}

// Example: Create new set from the userIDs array.
const userIDs = [101, 102, 103, 104, 104, 105, 105, 106];

const uniqueUserIDs = new Set(userIDs);
console.log(uniqueUserIDs);

// Finding the length
let length = 0;
for (userID of uniqueUserIDs) {
  length++;
}
console.log(length);
