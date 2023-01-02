// Topic: Iterable

/*
    # What is iterable?
    - Object that can be iterate by for of loop.
    - Array and string are iterable.
    
    # What is Array like object?
    - Those object which has .length property.
    - We can access them using the index.
    - String is array like object.
    
    # Note
    - Object is not iterable.
*/

// Syntax
// String
const studentName = "Batman";
for(character of studentName){
    console.log(character);
}

// Array
const rollNumbers = [1,2,3,4,5];
for (number of rollNumbers){
    console.log(number);
}