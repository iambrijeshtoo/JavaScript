// Else If

/* 
    # What is Else If?
    - It's use when you have multiple condition in your code and you need to check weather one and the other condition are satisfied or not.

    # Why use Else If?
    - You can check one and more condition

    # Syntax:
    if (condition1){
        Code...
    } else if (condition2){
        Code...
    } else if (condition3){
        Code...
    } else {
        Code...
    }
*/

let bat = true;
let ball = false;

if (bat && ball) {
  console.log("We can play cricket.");
} else if (ball) {
  console.log("We can play catch.");
} else if (bat) {
  console.log("We need ball.");
} else {
  console.log("We can't play today.");
}
