function add(a, b) {
  let sum = a + b;
  return sum;
}
function subtract(a, b) {
  let sub = a - b;
  return sub;
}

function multiply(a, b) {
  let multi = a * b;
  return multi;
}
function divide(a, b) {
  let divi = a / b;
  return divi;
}

function increment(n) {
  return n + 1;
}
function decrement(n) {
  return n - 1;
}
function makeInt(string) {
  return parseInt(string, 10);
}
function preserveDecimal(string) {
  return parseFloat(string);
}

const intString = "42";
const floatString = "3.14159";

const integerResult = makeInt(intString);
const floatResult = preserveDecimal(floatString);

console.log("Integer result:", integerResult); 
console.log("Float result:", floatResult);  
