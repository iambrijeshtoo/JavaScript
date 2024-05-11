JavaScript has several built-in data types that are used to represent different kinds of values. Here are the main data types in JavaScript:

1. **Primitive Data Types:**

   - **Number**: Represents both integer and floating-point numbers.
   - **String**: Represents sequences of characters, such as text.
   - **Boolean**: Represents true or false values.
   - **Undefined**: Represents a variable that has been declared but hasn't been assigned a value.
   - **Null**: Represents the intentional absence of any value.
   - **Symbol**: Introduced in ECMAScript 6 (ES6), symbols are unique and immutable values that are often used as object property keys.

2. **Complex Data Types:**
   - **Object**: Represents a collection of key-value pairs, where keys are strings (or symbols) and values can be of any data type.
   - **Array**: Represents an ordered list of values, indexed by integers.
   - **Function**: Represents executable code that can be invoked or called.

It's important to note that in JavaScript, primitive data types are passed by value, while complex data types (objects, arrays, functions) are passed by reference. This distinction can have implications for how values are copied and shared between variables.

Additionally, JavaScript is a dynamically typed language, which means that you don't explicitly specify the data type of a variable when declaring it. The interpreter determines the data type based on the value assigned to the variable.

Here's an example of using different data types in JavaScript:

```javascript
// Primitive data types
let num = 42; // Number
let text = "Hello"; // String
let isTrue = true; // Boolean
let empty = null; // Null
let notDefined; // Undefined

// Complex data types
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

// Using symbols
const idSymbol = Symbol("id");
let user = {
  [idSymbol]: 123,
};
```

These data types provide the foundation for representing and working with various kinds of values in JavaScript.
