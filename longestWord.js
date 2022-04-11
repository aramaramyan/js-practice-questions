/*
Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
Example string : 'Web Development Tutorial'
Expected Output : 'Development'
 */

function longestWord(str) {
  if(typeof str !== "string") {
    return "The argument of function must be a string!";
  }

  const strArr = str.split(" ");
  let length = 0,
    word;

  for(let i = 0; i < strArr.length; i++) {
    if(strArr[i].length > length) {
      word = strArr[i];
      length = strArr[i].length;
    }
  }

  return  word;
}

console.log(longestWord("Web Development Tutorial")); // Development
console.log(longestWord(42))                          // The argument of function must be a string!