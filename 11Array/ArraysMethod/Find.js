// find()

// Q. What is find()?
// - It takes call back function as parameter.
// - It takes element from the given array and find particular value according to the condition. As soon as it finds a value which satisfies the condition it will stop searching.

// SYNTAX
const arr = ["123", "1234", "12345"];
const ans = arr.find((str) => str.length === 4);
console.log(ans);

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
const ans1 = usersDetails.find((user) => user.userId === 3);
console.log(ans1.userName);
