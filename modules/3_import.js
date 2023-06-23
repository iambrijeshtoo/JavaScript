// `import`

//? Q. What is `import`?
// - In JavaScript, the import statement is used to import functionality from other modules. It allows you to access and use functions, variables, or classes defined in separate JavaScript files or modules within your current module.

//! NOTE 
// - When you are using `import` for importing the code form the other file (modules). You need to update the file type in the HTML that JavaScript file is the module.

//* SYNTAX
//* Importing Class

// import ClassName from "./fileName" (./ for relative file path)
// import ClassName from "/fileName" (/ for absolute file path)
// - When you import class from one file to another file you can actually set custom name for that ClassName.

//* Importing selected function

// import {functionName} from "./fileName"
// import {functionName as customFunctionName} from "./fileName"

// - When you import function from one file to another file you can actually set custom name for that function.

// - YES, YOU CAN SET CUSTOM NAME WHILE IMPORTING BUT CONVENTION IS TO FOLLOW THE SAME FILE, CLASS OR FUNCTION NAME FOR BETTER READABILITY. SO IT DOES'T CREATE CONFUSION OR WE LOST TRACK OF IMPORTED MODULE. EVEN IF YOU WANT TO USE CUSTOM NAME FOR IMPORTED MODULE MAKE SURE THE FILE PATH IS THE RIGHT.
