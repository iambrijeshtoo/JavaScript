// NOTE
// - JavaScript store date value in milliseconds.
// - In JavaScript date the months start with number 0. That means if you want to use january as a month you need to use '0' as a month number rather than '1'. So it's actually count from 0 to 11 for months.

let myDate = new Date();
// console.log(typeof myDate);
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(myDate.toDateString());
// console.log(myDate.toUTCString());

// Creating date by passing value to Date object
const myCreatedDate = new Date(2023, 7, 3, 12, 0); // (Year, month, date, hour, minute)
// console.log(myCreatedDate.toLocaleString());

// Custom MM-DD-YYYY formate
const customDateFormate = new Date("08-03-2023");
// console.log(customDateFormate.toLocaleString());

// Timestamp
const myTimeStamp = Date.now();
console.log(myTimeStamp); // Date value in millisecond

// Get time from the date
const getTime = customDateFormate.getTime();
console.log(getTime);

// Millisecond to second
const milliToSec = Date.now();
console.log(Math.floor(Date.now() / 1000));

// Custom date
const customDate = new Date();
const date = customDate.toLocaleString("default", {
  dateStyle: "full",
  timeStyle: "full",
});

console.log(date);
