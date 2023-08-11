// Nested Object

const mainObject = {
  name1: "value1",
  name2: "value2",
  name3: "value3",
  nestedObject: {
    name1: "value1",
    name2: "value2",
    name3: "value3",
  },
};

// Accessing nested object
mainObject.nestedObject.name1;
mainObject.nestedObject["name1"];
mainObject["nestedObject"]["name1"];
