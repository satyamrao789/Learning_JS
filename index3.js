console.log("Operators in JS");
let a = 5;
let b = 3;
// Exponential operator **
console.log("a ** b = ", a ** b); // 125
// Modulus operator %
console.log("a % b = ", a % b); // 2

// assignment operator =
let c = "15";
let d = 15;

// equal to operator ==
// only compares values
console.log("c == d ", c == d); // true

// equal to and type ===
// compares value and datatype also
console.log("c === d ", c === d); // false

// Ternary operator
// Syntax
// (condition) ? (output 1) : (output 2)
// output 1 - if condition is TRUE
// output 2 - if condition is FALSE

//if age is greater than 18 display legal age, else display under age.
age = 19;
console.log(age > 18 ? "legal age" : "under age"); // legal age

const items = {
    name: "Moon",
    age: 23,
    mob: BigInt(9113443232)

}
console.log(items.mob + " " + typeof(items.mob));