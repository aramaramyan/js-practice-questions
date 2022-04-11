// Write a function which will remove all repeated items of array.

function removeAllRepeated(arr) {
  if(!Array.isArray(arr)) {
    return "The argument of function must be an Array!"
  }

  return arr.filter((item, i) => arr.indexOf(item) === i);
}

console.log(removeAllRepeated([1, 2, 2, 3, 4, 5, 6, 3, 3, 5, 7, 8, 9, 9, 1, 2, 3])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]