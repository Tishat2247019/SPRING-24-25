let ffunction = (a, b) => a + b;

let myFunction = (a, b) => a * b;

new_function = (a, b) => {
  a + b;
};
const new_function1 = (a, b) => a + b;
new_function2 = (a, b) => {
  return a + b;
};

check_function = (name) => "hello " + name; // We can skip the parenthisis if we have only one parameter in the arrow function
console.log(check_function("tishat"));

console.log(new_function2(5, 5));

setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);
