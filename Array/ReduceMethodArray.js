// Reduce method in array

/* 
    # What is reduce method?
    -> Before understanding the "reduce method" you need to understand what "reduce" word means. It means that something that can be shorten or smaller.

    # Why use reduce method?
    -> When you use reduce method on array it will give you back the sum of the all the elements inside the array.

    # How to use reduce method?
    -> It's take callback function as parameter and default value.

    # NOTE:
    -> If you pass default value 100 it will return 115. Because it taking default value 100 and adding the sum of all the elements and returning the total.

    ## Syntax:

    array.reduce(()=>{}, defaultValue);
*/

const array = [1, 2, 3, 4, 5];

const total = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(total);
