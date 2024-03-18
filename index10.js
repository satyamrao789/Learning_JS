let marks = [22, 15, "Satyam", true, "Successful", 80];
console.log(marks);
console.log(typeof marks);
console.log(marks.length);
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
console.log(marks[5]);
console.log(marks[6]); // will be undefiend because index 6 is not present

marks[2] = "Rao"; // array value updated
console.log(marks[2]);

console.log(marks);