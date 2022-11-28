// Parameter Destructuring

/* 
    # What is parameter destructing?
    - creating the function which it's parameter takes the object value.

    # Syntax:
    datatype objectName = {
        key1 : value1,
        key2 : value2,
        key3 : value3,
    }

    function functionName ({key1, key2, key3}){
        value1;
        value2;
        value1;
    return;
    }
*/

const student = {
  name: "Batman",
  rollNumber: 1,
  division: "A",
};

function studentDetails({ name, rollNumber, division }) {
  console.log(name);
  console.log(rollNumber);
  console.log(division);
  return;
}

studentDetails(student);
