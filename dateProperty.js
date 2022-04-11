// Create an object which will have a date key

// EXAMPLE 1 (with prototype)

Object.prototype.date = (function() {
  return new Date();
})();

const person = {
  name: "Tom",
  surname: "Smith"
}

console.log(person)      // { name: "Tom", surname: "Smith" }
console.log(person.date) // 2022-04-11T12:39:14.788Z

// EXAMPLE 2 (with getter function)

const product = {
  name: "Apple",
  model: "MacBook Pro",
  get date() {
    return new Date();
  }
}

console.log(product)      // { title: "Apple", model: "MacBook Pro" }
console.log(product.date) // 2022-04-11T12:39:14.788Z