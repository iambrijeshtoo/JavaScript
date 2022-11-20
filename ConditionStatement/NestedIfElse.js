// Nested If Else

/*
    # What is Nested If Else?
    - It's simple mean that using if-else inside the if.

    # Why use Nested If Else?
    - If the first condition statement is true after that if need to check sub condition inside the first if statement that's why it use.

    # Syntax:
    if (condition){
        if(sub condition){
            Code...
        } else {
            Code...
        }
    } else {
        Code...
    }
*/

let box = true;
let item = true;

if (box) {
  console.log("There is box");
  if (item) {
    console.log("There is item inside the box.");
  } else {
    console.log("There is no item inside the box.");
  }
} else {
  console.log("There is no box");
}
