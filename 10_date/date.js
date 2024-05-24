// Date

let myDate = new Date();
console.log(myDate); // 2024-05-24T07:07:32.522Z
console.log(myDate.toString()); // Fri May 24 2024 12:37:32 GMT+0530 (India Standard Time)
console.log(myDate.toISOString()); // 2024-05-24T10:06:10.171Z
console.log(myDate.toJSON()); // 2024-05-24T10:06:10.171Z

// Note
// - In JavaScript month start from 0 (Jan) to 11 (Dec).
// let myCustomDate = new Date(2024, 0, 24);
// let myCustomDate = new Date(2024, 0, 24, 6, 30);
// let myCustomDate = new Date("2024-05-24"); // YYYY-MM-DD (When you passing date as a string formate month will be written in normal way.)
let myCustomDate = new Date("05-24-2024"); // MM-DD-YYYY (When you passing date as a string formate month will be written in normal way.)
console.log(myCustomDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCustomDate.getTime()); // It will return the milliseconds value
console.log(Math.floor(Date.now() / 1000));

let myMonth = new Date();
console.log(myMonth);
console.log(myMonth.getMonth() + 1);
console.log(myMonth.getDay());

console.log(
  myMonth.toLocaleString("default", {
    weekday: "long",
    dateStyle: "full",
  })
);
