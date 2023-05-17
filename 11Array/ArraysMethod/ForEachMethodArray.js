// For Each Method In Array

const array = [1, 2, 3, 4, 5];

// Create function which returns array's elements and index
function fun(element, index) {
  console.log(element);
  console.log(index);
}

for (let i = 0; i < array.length; i++) {
  fun(array[i], i);
}

// Using forEach() method will do same as above code
array.forEach(fun);

// forEach method take function as parameter
array.forEach(function (element) {
  console.log(element);
});

// Using arrow function
array.forEach((element) => {
  console.log(element);
});

// EXAMPLE
const arr1 = [
  {
    name1: "value1",
    name2: "value2",
    name3: "value3",
    sameName: "same value",
  },
  {
    name4: "value4",
    name5: "value5",
    name6: "value6",
    sameName: "same value",
  },
];

arr1.forEach((obj) => {
  console.log(obj.sameName);
});
