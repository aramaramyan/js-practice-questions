/*
Write a JS function, which will work as a calculator.
It will accept 3 arguments, first number, second number and the sign
EX:
calc(1, 2, ‘+’) => 3
calc(1, 2, ‘-’) => -1
calc(1, 2, ‘*’) => 2
calc(1, 2, ‘/’) => ½
*/

function calculator(num1, num2, sign) {
  if(typeof num1 !== "number" || typeof num2 !== "number" || typeof sign !== "string") {
    return "The first two function arguments must be numbers and the third - string!"
  }

  switch (sign) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Third argument must be '+', '-', '*' or '/'";
  }
}

console.log(calculator(40, 2, "+")); // 42
console.log(calculator(40, 2, "-")); // 38
console.log(calculator(40, 2, "*")); // 80
console.log(calculator(40, 2, "/")); // 20
console.log(calculator("40", 2, "+")); // The first two function arguments must be numbers and the third - string!
console.log(calculator(40, 2, "multiply")); // Third argument must be '+', '-', '*' or '/'