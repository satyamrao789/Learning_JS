var name = "Amitabh";

console.log(name);
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.toLowerCase());


console.log("Slice concepts");
// console.log(name.slice(start index, end index));
console.log(name.slice(4)); //starts from 2nd character from starting
console.log(name.slice(-4)); //starts from 2nd character from end
console.log(name.slice(2,5));

//what if start index > end index
console.log(name.slice(5,2)); // returns ""

console.log("Substring concepts");
// console.log(name.slice(start index, end index));
console.log(name.substring(4)); //starts from 2nd character from starting

//it is equivalent to console.log(name.substring(0))
console.log(name.substring(-4)); //it makes negative values to 0

console.log(name.substring(2,5));

//what if start index > end index
//it will swap it and make start index = 2, end index = 5
console.log(name.substring(5,2)); 

var person = "    Rahul   ";
console.log(person);
console.log(person.trim()); //removes spaces

