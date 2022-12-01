// Do NOT use .includes, to complete this function.
// Look through each value in `elements` and pass each element to `cb`.
// If `cb` returns `true` then return that element.
// Return `undefined` if no elements pass the truth test.

function find(array, callBack) {
  for (let index = 0; index < array.length; index++) {
    if (callBack(array[index])) {
      return array[index];
    }
  }
  return undefined;
}

module.exports = find;
