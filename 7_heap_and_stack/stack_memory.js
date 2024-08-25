// Stack Memory

// Video: https://youtu.be/7gwc-1czolw?si=QrGmJvmijiOURUkf
// Article: https://medium.com/@iarsham/stack-and-heap-in-js-c09aeabf3967

// What
// - The stack is a data structure used in JavaScript to manage function calls and local variables. It operates on a Last-In, First-Out (LIFO) principle, meaning the most recently added item is the first to be removed.

// Why
// - Local Variables: Keep track of the local variables via stack memory.
// - Call Stack: When you call a function. That call will be added to the stack memory in stack order until the function execution completes.

// How
// - The stack is used for static memory allocation.
// - Primitive datatype stored in the stack memory.
// - Stack provide the copy of the value

// Example
let variable1 = "value1";
let variable2 = variable1;
variable2 = "value2";

console.log(variable1);
console.log(variable2);

// Note
// - In Stack Memory it will give you the copy of the original value.
