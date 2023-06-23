function fun() {
  console.log(this.name);
}

const obj1 = {
  name: "value1",
  fun,
};

const obj2 = {
  name: "value2",
  fun,
};

obj1.fun();
obj2.fun();
