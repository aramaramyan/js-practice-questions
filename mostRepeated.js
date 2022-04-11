// Create function that will return all the most repeated fruit.

const fruits = ["apple", "apple", "orange", "mango", "apple", "apple", "mango", "apple", "orange", "apple", "apple",];

function mostRepeated(arr) {
  const obj = {};
  let count = 0,
      result;

  arr.forEach(fruit => obj[fruit] ? obj[fruit]++ : obj[fruit] = 1);

  for(let fruit in obj) {
    if(obj[fruit] > count) {
      count = obj[fruit];
      result = fruit;
    }
  }
  return `The most repeated fruit is - ${result}: ${count} times.`
}

console.log(mostRepeated(fruits)); // The most repeated fruit is - apple: 7 times.