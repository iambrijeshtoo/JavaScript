// Example object
const user = {
  name: "John",
  address: {
    city: "New York",
    street: "123 Main St",
  },
};

// Accessing properties without optional chaining
const city1 = user.address ? user.address.city : undefined;
console.log(city1); // Output: New York

// Accessing properties with optional chaining
const city2 = user.address?.city;
console.log(city2); // Output: New York

// Accessing non-existent property with optional chaining
const country = user.address?.country;
console.log(country); // Output: undefined

// Calling a method with optional chaining
const uppercaseName = user.name?.toUpperCase();
console.log(uppercaseName); // Output: JOHN

// Chaining multiple optional properties
const streetLength = user.address?.street?.length;
console.log(streetLength); // Output: 10
