let testArray = [1, 2, 9, 11];

let find = require("../find");

function odd(x) {
  if (x % 2 == 1) {
    return true;
  }
}

console.log(find(testArray, odd));
