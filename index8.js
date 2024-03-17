let name = "Satyam";
console.log(name);
console.log(typeof name);
console.log(name.length);
console.log(name[3]);

let user1 = "Alekh";
let user2 = "Rao";

value1 = "user1 is friend of user2";
console.log(value1);

//Template literals (also known as String Interpolation)
value2 = `${user1} is friend of $user2`;
console.log(value2);

value3 = `${user1} is friend of ${user2}`;
console.log(value3);
// value3 =${user1} is friend of ${user2}; uses a template literal to create a new string. Template literals are enclosed in backticks (`) and allow you to embed expressions (variables) directly within the string.
// %{user1}: This part inserts the value of the variable user1 (which is "Alekh") into the string.
// ${user2}: This part inserts the value of the variable user2 (which is "Rao") into the string.


// Template Literals vs. Concatenation:

// 1. Template literals offer a cleaner and more readable way to construct strings compared to traditional string concatenation using the plus sign (+). 
// 2. They also prevent accidental typos or spaces when inserting variables.