// Window VS Global Object

// Global Object
// - The fundamental object that provides properties and functions accessible throughout your JavaScript code.
// - In browsers, the global object is typically the window object, but this can vary depending on the environment (e.g., Node.js uses the global object).
// - It contains built-in functions like console.log(), parseInt(), and properties like document (in browsers).

// Window Object
// - A special object specific to browser environments that represents the browser window.
// - It inherits properties and methods from the global object but also has additional properties and methods related to the browser window, such as location (for accessing the URL), alert(), and confirm().

// Key Differences
// - Scope: The global object exists in all JavaScript environments, while the window object is specific to browsers.
// - Properties: The window object has additional properties and methods related to the browser window functionality that the global object doesn't have.

// When to Use Which
// - In most browser code, you can generally use window and global interchangeably since window is the de facto global object in browsers.
// - However, if you're writing code that might run in different environments (e.g., Node.js), it's safer to use global to explicitly reference the global object across environments.

// In a browser:
console.log(window === global); // Output: true (usually true in browsers)

// In Node.js:
console.log(window === global); // Output: false (they are different objects)
