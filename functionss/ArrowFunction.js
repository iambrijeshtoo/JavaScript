// Arrow Function

/* 
    # Default function
    ## Syntax:
    function functionName (parameter1, parameter2){
        Code...
    return returnValue;
}
*/
function sum(number1, number2) {
  return console.log(number1 + number2);
}

/*
    # Arrow function
    ## Syntax:
    datatype variableName = () => {Code}
*/
const greetings = () => {
  console.log("Hello, World!");
};

/* 
  ## Syntax: When you have one parameter to pass (Remove small brackets).
  datatype functionName = parameter1 => { return Code... }
*/
const greetingsCustomName = (name) => {
  return console.log(`Hello ${name}`);
};

/* 
  # Syntax: When your function return something in one single line (Remove the return keyword).
  datatype functionName = parameter1 =>  Code... }
*/
const studentName = (studentName) => console.log(`Hello ${studentName}`);
