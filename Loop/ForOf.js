/* 
    !NOTE:
    - array > for of > element 
    - objects > for of > Object.keys(objectName) > key > objectName[key] > value
*/

// Array
const arr = ["a", "b", "c"];

for (const i of arr) {
  console.log(i);
}

// Objects
const obj = {
  k1: "v1",
  k2: "v2",
  k3: "v3",
};

for (const i of Object.keys(obj)) {
  console.log(obj[i]);
}

/* 
    !NOTE:
    - As you know when we use "for of loop" it gives back the element from the array.
    - So, it will be same for objects also, that it will gives back the value from the objects.
    - But it's not happing because objects have two things inside it which is key and value.
    - That's why "for of loop" get confused what to give back as value.
    - To access the value you need to use "for of loop" and also the "Object.keys(objectName)" method.
    - This method will access the key from the objects after that you can print value by using the "objectName[key]" which will give back the value.
*/