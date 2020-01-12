/* 
Objects are using memory heap to store data, each and every one has it's own place that is why when we compere two obj with == or === the result is false
*/

const obj1 = {
  name: "dawid",
  age: "18",
  job: "programer"
};

const obj12 = {
  name: "dawid",
  job: "programer",
  age: "18"
};

const obj2 = {
  name: "dawid",
  age: "18",
  job: "programer"
};
//Easeist way but stringify is not gonna work when the arrangement is different
//Same obj's same arrangmet
console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); //true
//Same obj's idfferent arrangment
console.log(JSON.stringify(obj1) === JSON.stringify(obj12)); //false

//best way that uses prototypes
const matches = (firstObj, secondObj) =>
  Object.keys(secondObj).every(
    key => firstObj.hasOwnProperty(key) && firstObj[key] === secondObj[key]
  );

console.log(matches(obj1, obj12)); // still true despite the arrangment
