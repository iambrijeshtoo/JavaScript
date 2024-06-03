const object1 = {
  key1: "value1",
  key2: "value2",
  key3: () => {
    console.log(this);
  },
};

console.log(object1.key3());
