// Callback Function

// Function take other function as a parameter
function son(sonName) {
  console.log(`I am ${sonName}`);
}

function father(callback) {
  console.log(`I am father function`);
  callback("son function");
}

father(son);
