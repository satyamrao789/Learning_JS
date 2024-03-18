let marks = [33, 55, 11, 77, 88, 99, 100];

for (const value in marks) {
    console.log(marks[value]);
}

// For-Each Loop (JavaScript Language Basics)

// arrayName.forEach(element => {
    // write body here
// });
console.log("Learning For Each");
marks.forEach(value => {
    console.log(value);
});

console.log("Learning For in");
for (const value of marks) {
    console.log(value);
    
}

console.log(marks);
// Returns a string representation of an array.
console.log(marks.toString());

//Converts string to array
var name = "Elephant";
console.log(name);
var arrayNew = Array.from(name);
console.log(arrayNew);