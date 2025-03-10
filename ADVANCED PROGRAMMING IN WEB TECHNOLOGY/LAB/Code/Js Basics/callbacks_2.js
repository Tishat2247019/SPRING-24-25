function add_num(a, b) {
  let sum = a + b;
  console.log("Sum is ", sum);
}

function cal_sum(a, b, callback) {
  setTimeout(() => callback(a, b), 4000);
}

cal_sum(10, 20, add_num);
