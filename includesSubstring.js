/*
Write a JavaScript function that checks if the given string includes the given substring.
EX: str = “Hello” substr = “ell” => returned value is true
EX: str = “Kill” substr = “lolo” => returned value is false
 */

function includesSubstring(str, substr) {
  if (typeof str !== "string" && typeof substr !== "string") {
    return "The arguments of function must be strings!";
  }

  let i = 0,
      j = 0,
      match = 0;

  while (i < str.length) {
    if (str[i] === substr[j]) {
      match++;
      i++;
      j++;
      if (match === substr.length) return true
    } else if (str[i] === substr[0]) {
      match = 0;
      j = 0;
    } else {
      match = 0;
      j = 0;
      i++;
    }
  }

  return false;
}

console.log(includesSubstring("Hello", "ell")); // true
console.log(includesSubstring("Kill", "lolo")); // false