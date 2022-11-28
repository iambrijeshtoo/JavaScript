// Function

/* 
    # Syntax
    function functionName (parameter1, parameter2, parameter3...){
            Code...
        return returnValue; 
    }

    # Parameter
    - It takes value from the user pass into the function.

    # Argument
    - It's value that you are passing in parameter.

    # Call, Invoke and Run
    - It's all the same thing when you want to use function.
*/

function greetings() {
  return console.log("Hello, World!");
}

// Calling function
greetings();

// Print the function
console.log(greetings());

// Store function in variable
const variable = greetings();
console.log(variable);

// What if you don't pass the argument?
function addThreeNumbers(number1, number2, number3) {
  return console.log(number1 + number2 + number3);
}
addThreeNumbers(1, 2);

/* 
    !NOTE:
    - When give parameter to function after that when you call the function and don't pass the argument.
    - It will take that parameter as undefine.
    - When you add 1 + 2 + undefine the answer will be NaN (Not a number).
*/
