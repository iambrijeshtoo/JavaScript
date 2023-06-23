import MyClass from "../file_1";
import { fun } from "../file_1";

// Importing class from file_1 and creating object in file_2
const obj = new MyClass("value1", "value2");
console.log(obj);

// Importing function form file_1 and using in file_2
fun();

// NOTE
// Right now it will give you the error because files are not treated as module but if you use this with HTML this will work. 