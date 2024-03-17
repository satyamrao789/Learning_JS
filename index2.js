// nn bb ssu - 7 primitive datatypes in Javascript
let a = null; 
let b = 5;
let c = true;
let d = BigInt("44") * BigInt("66");
let e = Symbol("@");
let f = "i am your friend";
let g = undefined;
console.log(a, b, c, d, e, f, g);

//typeof operator is used to know the dataype of that value
//here datatype of value stored in 'b' is number
console.log(typeof a); //why answer is object - Check reason at bottom
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);

//Objects - non_primitive datatypes in Javascript

const item = {
  name: "moon",
  mob: BigInt("9113455234"),
  marks: 98,
};
console.log(item["mob"]); // 1st way to access key value

console.log(item.mob); // 2nd way to access key value
console.log(item.marks);
console.log(typeof item);

// null in JavaScript signifies the absence of an object value.
// typeof null returns "object" due to historical reasons.
// Use the strict equality operator (===) to reliably check if a variable is null.