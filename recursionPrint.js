/* Let’s say we have an object with linked props (i.e
Print all the values with recursion. */

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function recursionPrint(obj) {
  console.log(obj.value)
  if (obj.next) {
    recursionPrint(obj.next);
  }
}

recursionPrint(list);