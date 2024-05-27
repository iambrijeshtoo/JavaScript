// splice()

// What
// - Remove elements: You can delete a specific number of elements from a starting position within the array.
// - Add elements: You can insert new elements at a specified index in the array.
// - Replace elements: You can combine removal and insertion to effectively replace existing elements with new ones.

// Why
// - Flexibility: splice offers a versatile way to manipulate arrays in various scenarios. You can use it for deleting unwanted items, inserting new data at specific points, or even replacing existing elements.
// - In-place modification: splice modifies the original array directly, avoiding the need to create a new array entirely in some cases. This can be more efficient for memory usage.

// Syntax
// array.splice(start, deleteCount, item1, item2, ..., itemN)

// How
// - start: The index at which to begin the modification (starting from 0). Negative values count from the end of the array.
// - array: The array you want to modify.
// - deleteCount (optional): The number of elements to remove from the starting index. If omitted, all elements from start to the end are removed.
// - item1, item2, ..., itemN (optional): The new elements (zero or more) to insert at the start index. If no new elements are specified, a splice effectively removes elements only.

// Example
let fruits = ["apple", "banana", "orange", "mango", "kiwi"];

// Remove 2 elements starting from index 1 (banana and orange)
fruits.splice(1, 2);
console.log(fruits); // Output: ["apple", "mango", "kiwi"]

// Insert "grape" at index 2
fruits.splice(2, 0, "grape");
console.log(fruits); // Output: ["apple", "mango", "grape", "kiwi"]

// Replace "mango" with "watermelon" at index 1
fruits.splice(1, 1, "watermelon");
console.log(fruits); // Output: ["apple", "watermelon", "grape", "kiwi"]

// Example - 2
const myArray = [0, 1, 2, 3, 4, 5];
console.log(myArray.splice(1, 3));
console.log(myArray);

// Pros
// - Versatility: Handles removal, insertion, and replacement of elements in one method.
// - In-place modification: Modifies the original array directly, potentially improving efficiency.

// Cons
// - Complexity: The syntax might appear complex at first, especially for beginners.
// - Mutates the original array: Be cautious when using splice as it permanently alters the original array. Consider creating a copy if you need to preserve the original state.

// Note
// - The splice method returns an array containing the deleted elements. This can be useful if you need to capture the removed items for further processing.
// - Be mindful of negative values for start and deleteCount as they can lead to unexpected behavior if not used correctly.
