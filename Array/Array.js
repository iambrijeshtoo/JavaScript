// Array

/* 
    # What is Array?
    - It's reference type.
    - It's object.
    - It's collection of ordered items.

    # Why use Array?
    - It's work same as variable.
    - Suppose you have to store 5 car names for that you need to create 5 variable for each car name and if you want loop thorough for find any of the car name it will be difficult.
    - For that we use array.

    !NOTE:
    - When create array we use const as type.
    - It can store array inside array, objects and function also.

    # Syntax:
    const arrayName = [item1, item2, item3, ...];
*/

const color = ["Red", "Green", "Blue"];
const number = [1, 2, 3];
const mix = ["Red", "Green", "Blue", 1, 2, 3];

// ? This are the two more method to create array but don't recommended.

const name = [];
name[0] = "Batman";
name[1] = "Superman";
name[2] = "Flash";
console.log(name);

const size = new Array("S", "M", "X", "XL");
console.log(size);
