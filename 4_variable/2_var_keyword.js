// `var` Keyword (Not Recommended)

// Syntax
// var variableName = value;

// Initialized later
var variable;
variable = "value";

// Redeclare
var variable = "value";
var variable = "value";

// Reassigned
var variable = "value1";
variable = "value2";

// Note
// - It can be initialized later.
// - It can be redeclare.
// - It can be reassigned.
// - It has global scope.
// - The var keyword is not recommended for modern JavaScript development. It has been deprecated and replaced with let and const. Using var can lead to unexpected behavior and bugs in your code.
