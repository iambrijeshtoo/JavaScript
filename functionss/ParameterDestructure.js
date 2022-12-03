// Parameter Destructuring

// Taking values from object and pass to function as parameters
const array1 = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

function father({ key1, key2, key3 }) {
  console.log(key1);
  console.log(key2);
  console.log(key3);
  return;
}
father(array1);
