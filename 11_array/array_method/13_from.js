// from()

// What
// - To convert the single value into array.

const myName = "Brijesh";
console.log(Array.from(myName));

// Note
// - If it's unable to convert the passed value to array. It will return the empty array.
console.log(Array.from({ name: "Brijesh" }));
