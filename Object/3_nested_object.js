/* ------------------------------ Nested Object ----------------------------- */

const object = {
  name_1: "value_1",
  name_2: "value_2",
  name_3: "value_3",
  nested_object: {
    name_1: "value_1",
    name_2: "value_2",
    name_3: "value_3",
  },
};

// Accessing nested object
object.nested_object.name_1;
object.nested_object["name_1"];
object["nested_object"]["name_1"];
