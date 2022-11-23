// For in loop in array

/* 
  !Note:
  - For in loop give the element's index inside the array.
*/
const array = ["Item1", "Item2", "Item3"];

for (const index in array) {
    const element = array[index];
    console.log(element);
}
