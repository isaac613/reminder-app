const fs = require("fs");

const person = {
  name: "Isaac",
  age: 21,
};

const personJson = JSON.stringify(person);

fs.writeFileSync("json_demo/person.json", personJson);
const dataBuffer = fs.readFileSync("json_demo/person.json");
const dataJson = dataBuffer.toString();
const data = JSON.parse(dataJson);
console.log(person);
console.log(personJson);
console.log(dataBuffer);
console.log(dataJson);
console.log(data);
