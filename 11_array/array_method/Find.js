// find()

// Q. What is find()?
// - It takes call back function as parameter.
// - It takes element from the given array and find particular value according to the condition. As soon as it finds a value which satisfies the condition it will stop searching.
// - If it is doesn't find the value that are we looking for it will return `undefine` as value.

// SYNTAX
const array = ["123", "1234", "12345"];
const answer = array.find((string) => string.length === 4);
console.log(answer);

// EXAMPLE: Find user which id number is 3.
const usersDetails = [
  {
    userId: 1,
    userName: "Batman",
  },
  {
    userId: 2,
    userName: "Superman",
  },
  {
    userId: 3,
    userName: "Flash",
  },
];
const answer1 = usersDetails.find((user) => user.userId === 3);
console.log(answer1.userName);
