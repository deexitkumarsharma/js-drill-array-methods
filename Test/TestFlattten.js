const test = require("../flatten");

let nestedArray = [1, [2], [[3]], [[[4]]]];
// let expectedOutput = [ 1, 2, 3, 4, 5, 6]

let flattenOutput = test(nestedArray);
console.log(flattenOutput);

// if(JSON.stringify(flattenOutput) == JSON.stringify(expectedOutput)){
//     console.log('Code is running')
// }else {
//     console.log('There is some issue')
// }
