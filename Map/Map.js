// Topic: Map

/*
    # What is map?
    - It's iterable.
    - It's like object.
    - It's ordered is guaranteed.
    - It store data in key and value form.
    - Key can be anything in the map variable, string, object, array etc.
    
    # Note
    - In object literal we store data using name and value. 
    - That name can be only string or symbol.
    - Even if you put number as name for example "01 : one" and you access the value using "01".
    - JavaScript take that as string, even though it's number.
*/

// Syntax
// Direct passing value
const userIDs = new Map([
  ["userID", "101"],
  ["userName", "Batman"],
]);
console.log(userIDs);

// Using constructor
const studentDetails = new Map();

// set();
studentDetails.set("name", "Batman");
studentDetails.set("rollNumber", 1);
studentDetails.set(1, "one");
studentDetails.set([1, 2, 3], "OneTwoThree");
studentDetails.set({ subject: "Math" }, "Math Teacher");
console.log(studentDetails);

// get();
console.log(studentDetails.get("name"));
console.log(studentDetails.get("rollNumber"));

// Iterable
// Return keys
for (let key of studentDetails.keys()) {
  console.log(key);
}

// Return values
for (let key of studentDetails) {
  console.log(key);
}

// Return keys and values
// It's return key and value in array form.
for (let [key, value] of studentDetails) {
  console.log([key, value]);
}

// Using object as key
const teachersDetail = {
  id: "101",
  name: "Math Teacher",
};
const extraTeachersDetail = new Map();
extraTeachersDetail.set(teachersDetail, {
  subject: "Math",
  department: "Math Department",
});
console.log(teachersDetail.id);
console.log(teachersDetail.name);
console.log(extraTeachersDetail.get(teachersDetail).department);
