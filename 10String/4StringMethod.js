// String Method

let str = "Hello, World!";

// .length property
console.log(str.length);

// slice(start, end);
// - end parameter is optional.
// - It return new string.
// - It support negative indices.
console.log(str.slice(1, 5));
console.log(str.slice(5));
console.log(str.slice(-5));
console.log(str.slice(-1, -5));

// substring(start, end);
// - end parameter is optional.
// - It return new string.
// - It doesn't support negative indices.
console.log(str.substring(1, 5));

// replace()
// - replace method doesn't change the string it called on.
// - It return new string.
// - It only replace the first match.
// - It is case sensitive.
console.log(str.replace("World", "Batman"));

// - To remove the case sensitive use regular expression `/word/i` (Regular expression written without quote)
// - `i` stand for insensitive flag.
console.log(str.replace(/world/i, "Superman"));

// - To replace word in all place in the file use `/word/g`
console.log(str.replace(/world/g, "Flash"));

// toUpperCase()
console.log(str.toUpperCase());

// toLowerCase()
console.log(str.toLowerCase());

// concat()
let str1 = "Hello";
let str2 = "World";
let str3 = str1.concat(" ", str2);
console.log(str3);

// trim()
let str4 = "     Hello world";
console.log(str4.trim());

// trimStart()
console.log(str4.trimStart());

// trimEnd()
console.log(str4.trimEnd());



