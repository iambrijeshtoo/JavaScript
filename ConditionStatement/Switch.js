// Switch

/* 
    # What is Switch?
    - The switch statement is used to perform different actions based on different conditions.

    # Syntax:
    switch(condition){
        case x:
            Code...
        break;
        case y:
            Code...
         break;
        case z:
            Code...
        break;
        default:
            Code...
    }
*/

let day = 10;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
    break;
}
