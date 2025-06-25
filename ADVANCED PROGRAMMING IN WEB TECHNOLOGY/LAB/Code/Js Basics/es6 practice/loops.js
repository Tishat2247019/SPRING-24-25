//for loops
const array = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < array.length; i++) {
  // prints the elements of the array/iterable
  console.log(array[i]);
}

for (let i in array) {
  // prints the index of the array/iterable
  console.log(i);
  console.log(array[i]);
}

for (let i of array) {
  //prints the array/iterable elements
  console.log(i);
}

console.log("///////////////////////////");

array.forEach((element, index, array) => {
  console.log(element, index);
  if (index == array.length - 1) console.log(array);
});
