"use strict";  
console.log("Telling about var")
//var is globally - scoped
//so 'a' in line 4 which is outside of block, and 'a' in line 6 which is inside of block are treated same.
var a = 7;
{
  var a = 10;
  console.log(a) // 10
}
console.log(a) // 10

console.log("Telling about let")
//let are block - scoped
//so 'b' in line 14 which is outside of block, and 'b' in line 16 which is inside of block are treated different.
let b = 7;
{
  let b = 10;
  console.log(b) // 10
}
console.log(b) // 7

// we cannot change value of const
//if you un-comment line 23, you can see error
const c = 5;
console.log("Telling about const")
// c = 0;
console.log(c)

// The purpose of "use strict" is to indicate that the code should be executed in "strict mode". With strict mode, you can not, for example, use undeclared variables.

//example to show "use strict"
d = 5;
console.log(d); //5

// "use strict"
d = 5;
console.log(d); // ReferenceError: d is not defined.