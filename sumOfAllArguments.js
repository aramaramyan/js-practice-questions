/* Return the sum of all arguments passed to function.
   Example: f(1,2,3,4) => 24, f(4,7) => 28, f(4) => 4 */

function sum(...rest) {
  if([...rest].every(item => typeof item === "number")) {
    return [...rest].reduce((aggr, val) => {
      return aggr + val;
    });
  }
  return "The arguments of function must be numbers";
}

console.log(sum(1, 2, 3, 4, 5, 6, 7)); // 28
console.log(sum(1, 2, 3, "string", 4)) // The arguments of function must be numbers