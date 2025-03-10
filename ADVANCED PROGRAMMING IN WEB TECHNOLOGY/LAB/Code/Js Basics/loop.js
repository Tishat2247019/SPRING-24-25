const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < 10; i++) {
  if (a[i] % 2 == 0) {
    console.log(a[i]);
  }
}

let i = 0;
while (i < 3) {
  console.log(a[i]);
  i++;
}

for (let i = 0; i < 10; i++) {
  console.log("hello tishat");
}

const for_of = [1, 3, 4, 5, 7];
for (let elem of for_of) {
  console.log(elem);
}

const for_in = [3, 3, 3, 4, 4, 4];
for (let elem in for_in) {
  // console.log(elem);
  console.log(a[elem]);
}

console.log("-----------------------");

a.forEach(print_func);

function print_func(elem) {
  console.log(elem);
}

a.forEach((elem, index) => {
  console.log(`Index ${index}, element is ${elem}`);
});
