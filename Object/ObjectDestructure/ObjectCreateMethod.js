// Object.create();

/* 
    # What is Object.create(); method ? 
    -> In other programming languages when you want to create an object you need to create a class and then after you can create the object of that class. But in JavaScript you can actually create object as datatype. So don't have to create class. The "Object.create()" method will create object.

    NOTE:
    # Why object is known as object?
    -> In simple terms you can think object is key and value pair that store data. But in OOPs there is object also. This object and OOPs object are the same object. Because in OOPs object store data in heap and stack. In heap store address and in stack store the value (object). Same thing happens in object it also store data in key and value form.

    -> object
    key: value

    -> OOPs object
    heap: stack (address: value)

    -> object === OOPs object
    -> key: value === heap: stack 
*/

const studentDetails = {
  name: "Student1",
  rollNumber: 1,
  division: "A",
  result: true,
  attendance: function () {
    console.log("Present");
  },
};

/* 
    NOTE:
    -> You are accessing values from the "studentDetails" object and creating another "student1" object. 
    -> You are creating a new object using the old object. 
 */
const student1 = Object.create(studentDetails);
console.log(student1.name);
console.log(student1.rollNumber);
console.log(student1.division);

/* 
    NOTE:
    -> You are creating a new "student2" object and overwriting all the values.
*/
const student2 = Object.create(studentDetails);
student2.name = "Student2";
student2.rollNumber = 2;
student2.division = "B";
student2.result = false;
student2.attendance = function () {
  console.log("Absence");
};
console.log(student2.name);
console.log(student2.rollNumber);
console.log(student2.division);
console.log(student2.result);
console.log(student2.attendance());
