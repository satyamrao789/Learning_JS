console.log("Learning For Loop");
var a = prompt("Enter a number");
a = Number.parseInt(a);

for(let i = 0; i <= 10; i++){
    console.log(a +"*"+ i +"="+ (a*i));

}

const students = {
    Harsh : 40,
    Motii : 78,
    Priyam : 30
}

// for in loop
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }
for (const value in students) {
    console.log("Marks of "+value+" = "+ students[value]);
}

// forof loop
// for (const iterator of object) {
    
// }
for (const value of "Harsh") {
    console.log(value);
    
}