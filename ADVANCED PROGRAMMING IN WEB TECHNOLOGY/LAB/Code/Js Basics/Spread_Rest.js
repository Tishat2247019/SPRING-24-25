const a = [1, 3, 5, 6, 7, 8];
const b = [...a, 7, 8];
console.log(b);

for (let elem of b) {
  console.log(elem);
}

b.forEach((elem) => {
  console.log(elem);
});

const c = [1, 2, ...b, 8, 99];
console.log(c);
console.log(typeof c); // Type of array is a object in javascript

const d = [...a, ...b];

console.log(d);

//rest opereator

function add(...nums) {
  let total = 0;
  for (let elem of nums) {
    total += elem;
  }
  return total;
}

let total = add(1, 2, 3, 4, 5);
console.log("Sum of the array elements is : ", total);
