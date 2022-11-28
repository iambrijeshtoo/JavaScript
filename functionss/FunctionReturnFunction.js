// Function Returning Function

/* 
    # What is function returning function?
    - When you create a function and after that you return function as a return.

    # Syntax:
    - function functionName(){
        return functionName(parameter1, parameter2){
            return;
        };
    }
*/

function parent() {
  return function child(childName) {
    return console.log(`I am ${childName}`);
  };
}

const ans = parent();
ans("child");

