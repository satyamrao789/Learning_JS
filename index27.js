//Lexical scope means surrounding environment

//1. When you define a function in JavaScript, it has access to the variables and functions within its lexical scope. This includes the function's local variables and any variables from outer functions where it's nested.

//2.In essence, closures allow functions to "remember" the environment they were created in, providing a way to preserve state and create more versatile functions in JavaScript

var score = 18
function outside() {
    let count = 0 ;
    console.log(count);

    function inside() {
        count++;
        console.log(count);
        console.log(score);
    }

    return inside();
}

outside();


//here count was not defined in inside function, it first checked within itself, then it checked in the lexical scope,agar waha bhi nhi milta to global scope me check krega