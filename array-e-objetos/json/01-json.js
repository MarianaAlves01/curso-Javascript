const car = {
  "brand": "BMW",
  "wheels": 4,
  "doors": 2,
  "type": "Sedan",
};

let jsonToString = JSON.stringify(car);
console.log(jsonToString);

let stringToJson = JSON.parse(jsonToString);
console.log(stringToJson);
