// Function Called As Variable

const obj = {
  name1: "Value1",
  name2: "Value2",
  name3: "Value3",
  fun: function () {
    console.log(this.name1);
  },
};

// Normally function called from the object.
obj.fun(); // Value1

// When you store a function in variable and you call as function what will happen is the function now will point to the window object. Because of that actual function will lost it's ability to point to the it's object and any values which are associated will be undefined.
const var1 = obj.fun;
var1(); // undefined
