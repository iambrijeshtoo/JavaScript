const url = "https://dummyjson.com/products/1";

// fetch() is provide by the browser which return promise because of that we can use then and catch.
fetch(url)
  // Storing data in result for and chaining with .json() which also return promise.
  .then((result) => result.json())
  // Printing the result in console.
  .then((json) => console.log(json))
  // Using catch for handling the error.
  .catch((error) => console.log(error));
