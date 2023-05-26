function a() {
  console.log("hey");
}

function b(callBack) {
  callBack(a);
}

b(a);
