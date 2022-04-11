// Array.map() implementation

Array.prototype.myMap = function(callback) {
  const newArr = [];

  for(let i = 0; i < this.length; i++) {
    newArr.push(callback(this[i], i, this));
  }

  return newArr;
}

console.log(["apple", "orange", "mango"].myMap(fruit => fruit.toUpperCase())); // ['APPLE', 'ORANGE', 'MANGO']

// Array.reduce() implementation

Array.prototype.myReduce = function(callback, initialValue) {
  let aggr = initialValue,
    start = 0;

  if(!initialValue) {
    aggr = this[0];
    start = 1;
  }

  for(let i = start; i < this.length; i++) {
    aggr = callback(aggr, this[i], i, this)
  }

  return aggr;
}

const students = [
  {name: "Tom", average: 32},
  {name: "Loren", average: 75},
  {name: "Jack", average: 56},
  {name: "Olivia", average: 47},
]

console.log(students.myReduce((aggr, student) => {
  student.average >= 50? aggr.pass.push(student) : aggr.fail.push(student);
  return aggr
}, {pass: [], fail: []}));

/*
{
  pass: [ { name: 'Loren', average: 75 }, { name: 'Jack', average: 56 } ],
  fail: [ { name: 'Tom', average: 32 }, { name: 'Olivia', average: 47 } ]
}
*/