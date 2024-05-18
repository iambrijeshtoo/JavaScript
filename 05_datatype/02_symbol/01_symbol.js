// Symbol ()

// What
// - Symbol is a primitive data type introduced in ECMAScript 6 (ES6) that represents a unique and immutable value.

// Why
// - Symbols are used to create unique identifiers, which can be used as property keys for object properties. They help prevent naming collisions and enable the creation of private object members.

// How
// - Symbols are created using the Symbol() function, optionally with a description as an argument. Each symbol value returned by Symbol() is guaranteed to be unique.

// Syntax
const symbolName = Symbol("Identifier value");

// Example
// Create a car object
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};

// Create a unique symbol for the identifier
const carId = Symbol("id");

// Add the identifier to the car using the symbol
car[carId] = "12345";

// Access the symbol property
console.log(car[carId]); // Output: '12345'

// Log the car object
console.log(car);
// Output: { make: 'Toyota', model: 'Corolla', year: 2020 }

// Note
// - Symbol doesn't use `new` operator. Because it's an primitive datatype. Primitive datatype doesn't required the `new` operator. Only Object, Array and Function need it.

// Pros
// - Uniqueness: Each symbol value returned by Symbol() is unique, helping prevent naming collisions in object properties.
// - Privacy: Symbols can be used to create private object members that are inaccessible from outside the object.

// Cons:
// - Immutability: Once created, symbol values cannot be changed or modified, which may limit their use in certain scenarios.
// - Limited use cases: Symbols are primarily used for creating unique identifiers and private object members, so they may not be as commonly used as other data types.
