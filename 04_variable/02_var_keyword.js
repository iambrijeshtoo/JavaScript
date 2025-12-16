// Topic: `var` Keyword (Not Recommended)

// Note:
// -> It can be initialized later.
// -> It can be reassigned.
// -> It can be redeclare in same scope.
// -> It can be redeclare in different scope.

// Note
// Variable declared with var keyword:
// - If it has global scope, it can be accessed inside anywhere.
// - If it has function scope, it can be accessed only inside the function where it is declared.
// - If it has block scope (like if, for, while), it can still be accessed outside the block, Globally and also inside functions.

// Syntax:
// var variableName = value;

// Example:
// Initialized later
var variable;
variable = "value";

// Reassigned
var variable = "value1";
variable = "value2";

// Redeclare
// - As you can see your are using same variable name twice.
// - It will take latest updated value.
var variable = "value1";
var variable = "value2";
