let exArray = [5, 4, 3, 2, 2, 1];
let reduce = require("../reduce");

function sum(a, b) {
  return a + b;
}

console.log(reduce(exArray, sum));
