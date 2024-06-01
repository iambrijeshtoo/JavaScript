1. **Primitive Data Types:**

   - **Number**: Represents both integer and floating-point numbers.
   - **String**: Represents sequences of characters, such as text.
   - **Boolean**: Represents true or false values.
   - **Undefined**: Represents a variable that has been declared but hasn't been assigned a value.
   - **Null**: Represents the intentional absence of any value.
   - **Symbol**: Introduced in ECMAScript 6 (ES6), symbols are unique and immutable values that are often used as object property keys.

2. **Non-Primitive Data Types (Reference, Complex):**
   - **Object**: Represents a collection of key-value pairs, where keys are strings (or symbols) and values can be of any data type.
   - **Array**: Represents an ordered list of values, indexed by integers.
   - **Function**: Represents executable code that can be invoked or called.

## Primitive Data Types (Immutable):

- Immutability: When you assign a primitive value to a variable, you're essentially creating a copy of that value in memory. If you try to modify the value later, JavaScript won't actually change the original value. Instead, it will create a new copy of the modified value and assign it to a new memory location.
- That's why primitive datatype stored in stack memory.

```javascript
let number = 10;

console.log(number); // Output: 10

number = number * 2; // Attempt to modify the value

console.log(number); // Output: 10 (original value remains unchanged)
```

## Non-Primitive Data Types (Mutable and Immutable):

- Mutability: These data types can be both mutable and immutable depending on the approach used.

- Mutable: By default, non-primitive data types are mutable. This means that you can modify the contents of the data structure (like changing elements in an array or properties within an object) after it's created.

- Immutable: However, you can achieve immutability with non-primitive data types by creating a new copy with the desired changes instead of modifying the original structure directly. Libraries like Immutable.js provide helper functions for creating immutable versions of common data structures.

**Mutable Approach**

```javascript
let numbers = [1, 2, 3];

numbers[0] = 10; // Modify the first element

console.log(numbers); // Output: [10, 2, 3] (original array is changed)
```

**Immutable Approach:**

```javascript
let numbers = [1, 2, 3];
let newNumbers = [...numbers, 4]; // Spread operator to create a copy and add 4

console.log(numbers); // Output: [1, 2, 3] (original remains unchanged)
console.log(newNumbers); // Output: [1, 2, 3, 4] (new array with modification)
```

## Note

- It's important to note that in JavaScript, primitive data types are passed by value, while complex data types (objects, arrays, functions) are passed by reference. This distinction can have implications for how values are copied and shared between variables.

- Additionally, JavaScript is a dynamically typed language, which means that you don't explicitly specify the data type of a variable when declaring it. The interpreter determines the data type based on the value assigned to the variable.

```javascript
// Primitive data types
let num = 42; // Number
let text = "Hello"; // String
let isTrue = true; // Boolean
let empty = null; // Null
let notDefined; // Undefined

// Non-Primitive data types
let person = {
  // Object
  name: "Alice",
  age: 30,
};

let numbers = [1, 2, 3]; // Array

function greet(name) {
  // Function
  console.log("Hello, " + name + "!");
}
```
