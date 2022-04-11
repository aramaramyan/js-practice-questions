/*
Write a JavaScript function that accepts a string as a parameter
and converts the first letter of each word of the string in the upper case.
EX: ‘i love you’ => ‘I Love You’, (use str.split function)
*/

function convertFirstToUpperCase(str) {
  if(typeof str !== "string") {
    return "The argument of function must be a string!";
  }

  return str.split(" ").map(item => item[0].toUpperCase() + item.slice(1)).join(" ");
}

console.log(convertFirstToUpperCase("i love you")); // I Love You
console.log(convertFirstToUpperCase(42));           // The argument of function must be a string!