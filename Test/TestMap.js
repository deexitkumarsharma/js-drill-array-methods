let map = require('../map')
let testarray = [2,4,6,8,10,10];

function multiply(x){
    return x*2;
}

console.log(map(testarray, multiply));



