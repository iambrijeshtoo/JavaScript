let age = 20;
if (age >= 18) {
  console.log("You can give a vote.");
} else {
  console.log("You can't give a vote.");
}

/* 
if 
if
if
- If you have `if condition` in order one after another it will work as an independent condition.

if
  if
    if
- If the condition are nested inside and the first condition will not satisfy for some reason it will stop check the reaming nested condition.
*/

let workday = "Monday";
let half_day = "Friday";
let holiday = "Sunday";

if (workday == "Monday") {
  console.log("Go to the office");
}
if (half_day == "Friday") {
  console.log("Go to the office");
}
if (holiday == "Sunday") {
  console.log("Stay home");
}
