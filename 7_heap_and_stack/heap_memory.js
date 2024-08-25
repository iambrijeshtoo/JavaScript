// Heap Memory

// What
// - A region in a computer's memory where objects and functions are stored in JavaScript.
// - It's used for dynamic memory allocation, meaning the size and location of memory blocks are determined at runtime.
// - Unlike the stack, which has a fixed size, the heap can grow and shrink as needed.

// Why
// - Storing objects and functions: Objects, arrays, and functions are typically stored in the heap due to their dynamic nature and variable sizes.
// - Flexibility: The heap allows for dynamic memory allocation, enabling the creation of objects and variables at runtime.
// - Automatic memory management: JavaScript's garbage collector automatically frees memory allocated in the heap when objects are no longer reachable.

// How
// - Allocation: When an object, array, or function is created, a block of memory is allocated in the heap.
// - Reference: A reference to the allocated memory block is stored on the stack, allowing the object to be accessed.
// - Garbage Collection: The JavaScript engine periodically scans the heap to identify objects that are no longer reachable (not referenced by any other objects). These objects are marked for deletion, and their memory is reclaimed.

// Example
const object1 = {
  key1: "value1",
};

const object2 = object1;
object2.key1 = "value2";

console.log(object1.key1);

// Note
// - In heap memory you will be refer to the original value.
// - If you make change. It will reflect to the original value.
