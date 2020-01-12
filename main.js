const obj1 = {
  name: "dawid",
  age: "18",
  job: "programer"
};

const obj2 = {
  name: "dawid",
  age: "18",
  job: "programer"
};

const matches = (firstObj, secondObj) =>
  Object.keys(secondObj).every(
    key => firstObj.hasOwnProperty(key) && firstObj[key] === secondObj[key]
  );

console.log(matches(obj1, obj2));
