// Primitive VS Reference Datatype

/* 
    # What is Primitive Datatype?
    - That kind of datatype which can be divide.
    - e.g. int, float, double etc.

    # What is Reference Datatype?
    - That kind of datatype which can't be divide.
    - e.g. objects, arrays etc.
*/

/* 
    # Primitive Datatype
    - As you see in the below example when you store number1 value inside the number2 and print the output you will get 1 and 1.
    - But after you increment the number1 and then try to get the output of the number you will get 2 and 1.
    - As you mark even though number2 = number1 but after increment the value it still hold 1.
    - It should be 2 and 2.
    - But in the primitive datatype this will not work.
    */
let number1 = 1;
let number2 = number1;
console.log(number1);
console.log(number2);

number1++;
console.log(number1);
console.log(number2);

/* 
    # Reference Datatype
    - Just like the above example here we created two array and store array1 in the array2.
    - Now after updating the array1 and then print the output it will show same result for array1 and array2.
*/
const array1 = ["Red", "Green", "Blue"];
const array2 = array1;
console.log(array1);
console.log(array2);

array1.push("Yellow");
console.log(array1);
console.log(array2);

/* 
    !Note:
    - Reason of why primitive and reference datatype don't work as same it because... 
    - As you see when primitive datatype is declare at that time they have their own address and object.
    - But when reference datatype is declare they actually point to same object with same address.
    - That's why after updating the array1 we still got same result in array2.
*/