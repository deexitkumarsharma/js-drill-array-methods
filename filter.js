// Do NOT use .filter, to complete this function.
// Similar to `find` but you will return an array of all elements that passed the truth test
// Return an empty array if no elements pass the truth 
function filter(array, callBack) {
    let newArray = [];
    for (let index = 0; index < array.length ; index++) {
        if (callBack(array[index])) {
            newArray.push(array[index]);
        }
    }
    return newArray;
}

module.exports =filter;
