const obj = {
  name: "towsif",
  id: "22-47019-1",
  cgpa: "3.99",
};

console.log(obj);
console.log(obj.cgpa);
for (let elem in obj) {
  console.log(elem);
}

const obj2 = {
  name: "opi",
};

const merge_obj = {
  ...obj,
  ...obj2,
};

console.log(merge_obj);
