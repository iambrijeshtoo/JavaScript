// Unshift Method In Array

/* 
    # Syntax
    datatype arrayName = [Item1,Item2, Item3];
    arrayName.unshift(value);

    !Note:
    - It will only add element at the first in the array.
*/
const colors = ["Red", "Green", "Blue"];
colors.unshift("Yellow");
console.log(colors);