//In JavaScript, __proto__ (pronounced "dunder proto") is an internal property that provides access to an object's prototype. The prototype is a special object that an object inherits properties and methods from. It's a crucial concept in understanding how inheritance works in JavaScript.

var obj1 = {
    fname : "Raj",
    mname : "Kishan"
}
var obj2 = {
    lname : "Sharma",
}
console.log(obj1);
console.log(obj1.fname);
console.log(obj1.mname);
console.log(obj2);
console.log(obj2.lname);

// __proto__ means [[Prototype]] : Object
obj2.__proto__ = obj1;
console.log(obj2);
//now obj2.is having reference of obj1
//first searched fname & mname inside obj2, it was not found, so it went to its reference
console.log(obj2.fname +" "+obj2.mname);


var obj3 = {
    fname : "Robert",
    mname : "Downey"
}
console.log(obj3);
//obj4 will be created as empty array and will be storing Prototype of obj4
var obj4 = Object.create(obj3); 
console.log(obj4);

console.log(obj4.fname + " " + obj4.mname);
obj4.lname = "Junior"

console.log(obj4);

console.log(obj4.fname + " "+obj4.mname+" "+obj4.lname);
