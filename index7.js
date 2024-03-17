console.log("Learning functions");

function sum(a,b) {
    console.log(a + b);
}
sum(4,5); //9
sum(7,15); //22


function add(a,b) {
    return a + b;
}
console.log(add(2,3)); //5


//answer is getting stored inside valu1
let value1 = function jod(a,b) {
    return a + b;
}
console.log(value1(7,8)); //15

//ARRAY FUNCTION
// Making above function more short
let value2 = (a,b) => {
    return a + b;
}
console.log(value2(7,8)); //15

//more short
let value3 = (a,b) =>  a + b;
console.log(value3(7,8)); //15
