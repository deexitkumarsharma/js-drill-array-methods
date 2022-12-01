// use this to test 'flatten'
// Flattens a nested array (the nesting can be to any depth).
// Hint: You can solve this using recursion.
// Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
const flatten = (elements) => {
  let flattenArray = [];
  for (let index = 0; index < elements.length; index++) {
    if (typeof elements[index] !== "object") {
      flattenArray.push(elements[index]);
    } else {
      let flattenItem = flatten(elements[index]);
      flattenArray = flattenArray.concat(flattenItem);
    }
  }
  return flattenArray;
};

module.exports = flatten;
