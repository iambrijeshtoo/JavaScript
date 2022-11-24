// Objects

/* 
    # What is Objects?
    - It's same just like array you can store data inside it.
    - But in key and value format.

    !Note:
    - Objects doesn't have index.

    # Syntax:
    datatype objectName = {
        key : value,
        key : value,
        key : value,
    }
*/

const object = {
  key1: "Value1",
  key2: "Value2",
  key3: "Value3",
};
console.log(object);

// # How to access data from object?
console.log(object.key1);
console.log(object.key2);
console.log(object.key3);

// # How to add key and value pair in object?

/* 
  !Note:
  - When your key name has space between for e.g. Full Name at that time you can't you dot operator.
  - You need to use bracket operator to store key inside the object.
*/

// ## Using dot operator
object.key4 = "Value4";
console.log(object);

// ## Using
object["key5"] = "Value5";
console.log(object);

// # How to access key name from the variable?
const keyName = "key6";
object[keyName] = "Value6";
console.log(object);