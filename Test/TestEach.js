let each = require("../each");
let array = [2, 4, 6, 8];

function multiply(x) {
  console.log(x * 2);
}

each(array, multiply);
