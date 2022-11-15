let testArray = [1,2,9,12,11];

let filter = require('../filter.js');

function even(x) {
    if (x%2 == 0) {
        return true;
    }
}

console.log(filter(testArray,even));