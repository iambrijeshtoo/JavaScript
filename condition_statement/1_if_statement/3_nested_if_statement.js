const age = 18;
const hasID = true;

if (age >= 18) {
  console.log("You are eligible to enter the venue.");

  if (hasID) {
    console.log("You have a valid ID. Enjoy the event!");
  } else {
    console.log("Please bring a valid ID for entry.");
  }
} else {
  console.log("You are not old enough to enter the venue.");
}
