// Callback Function

/* 
    # What is callback function?
    - When create function and that function's parameter take another function,
    - Mean calling function inside function.

    # Syntax:

    function child (parameter){
        return;
    }

    function parent (child){
        child(parameter);
        return;
    }
*/

function child(childName) {
  console.log(`I am child ${childName}`);
}

// function parent(child) {
//   console.log(`I am parent`);
//   child("child");
// }

function parent(callback) {
  console.log(`I am parent`);
  callback("child");
}

parent(child);
