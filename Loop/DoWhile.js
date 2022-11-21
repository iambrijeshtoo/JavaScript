// Do While Loop

/* 
    # What is Do While Loop?
    - This loop is same as while loop but it will execute the code at least one time.
    - Even if the condition is true or false.

    !NOTE:
    - If you forget to increase the variable used in the condition, the loop will never end. This will crash your browser.

    # Syntax:
    do {
        Code...
    } while (condition);
*/

let i = 0;
do {
  console.log(i);
  i++;
} while (i <= 10);
