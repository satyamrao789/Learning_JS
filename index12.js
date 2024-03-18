let marks = [21,32,43,54,65,76,87,98];

let marks_one = [1,2,3,4,5,6,7];
let marks_two = [11,22,33,44,55,66,77];

console.log(marks);
console.log(marks.length);

delete marks[2]; // deleted 43
console.log(marks); // replaces it as empty
console.log(marks.length); // even after deleting length remains same

fullMarks = marks.concat(marks_one);
console.log(fullMarks);

ultimateMarks = marks.concat(marks_one,marks_two);
console.log(ultimateMarks);

console.log(marks.reverse());
//array has been reversed and modified
console.log(marks);

//array sorted and updated
//empty has been moved to last
console.log(ultimateMarks.sort());
console.log(ultimateMarks);

