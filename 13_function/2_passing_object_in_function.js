// Passing Object In Function

const myObject = {
  key1: "value1",
  key2: "value2",
};

function handleObject(getObject) {
  return console.log(`Hey! I'm the ${getObject.key1}!`);
}

// Passing an object reference as a argument in the function.
handleObject(myObject);

// Passing literally an object as a argument in the function.
handleObject({
  key1: "value1",
  key2: "value2",
});
