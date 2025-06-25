const add = (a, b) => {
  console.log(a + b);
};

add(5, 5);

const add2 = (a, b) => a + b;

console.log(add2(1, 2));

const new_arraow = (a) => a;

console.log(new_arraow(101));

const my_func = (a, b) => a + b;
const fAdd = (a, b) => a + b; // this is same as  return a + b; // we can ommit the return statement if there is only a single line inside the arrow function block

addResult = fAdd(1, 3);
console.log(addResult);
