// Splice Method

// Q.What is splice method?
// - It use to delete and insert elements in the array.
//
// Q.How to use splice method?
// Delete
// - (starting index, delete)
// - You need to provide the starting index number.
// - Then how many elements do you want to delete number.
// - You leave the insert value.
//
// Insert
// - (starting index, delete, insert custom value)
// - You need to provide the starting index number.
// - You need to provide 0 as delete number.
// - Add custom value which you want insert.

// SYNTAX

// Delete
const array = [1, 2, 3, 4, 5];
const deletedElement = array.splice(1, 3); // (starting index, delete)
console.log(array);
console.log(deletedElement);

// Insert
array.splice(1, 0, "Inserted element"); // (starting index, delete, insert custom value)
console.log(array);

// Delete & insert custom value both at the same time
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array1.splice(1, 5, "Inserted element");
console.log(array1);
