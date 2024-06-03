// Map Iterate

const map = new Map();

map.set("key1", "value1");
map.set("key2", "value2");
map.set("key3", "value3");

map.forEach(function (value, key, map) {
  console.log(key + ": " + value);
});


