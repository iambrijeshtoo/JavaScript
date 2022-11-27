// Default Parameter

/* 
    # What is default parameter?
    - When give two parameter in function and then when we call function and pass only one argument to one parameter and didn't pass the second argument to second parameter it will take the default parameter value.

    # How to use default parameter?
    - When we are giving parameter too function at that time we give them default value. 

    # Syntax:
    function functionName (parameter1 = defaultValue, parameter2 = defaultValue){
        return
    }
*/

function sum(num1, num2 = 10) {
  return num1 + num2;
}
console.log(sum(1));
