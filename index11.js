let marks = [67, 22, 3, 4, 5, 5, 6, 7, 8, 9];
console.log(marks);
console.log(marks[3]);

//converts arrays to string
let number = marks.toString();
console.log(number);
console.log(number.length);
console.log(number[3]);

// Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log("Learning pop");
console.log(marks.pop());
console.log(marks);

let poppedNumber = marks.pop();
console.log(poppedNumber);
console.log(marks);

// Appends new elements to the end of an array, and returns the new length of the array.
// @param items — New elements to add to the array.
console.log("Learning push");
console.log(marks.push(78));
console.log(marks);

console.log(marks.push(80,81,82));
console.log(marks);

let num = 21;
console.log(marks.push(num));
console.log(marks);

// Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log("Learning shift");
console.log(marks.shift());
console.log(marks);

// Inserts new elements at the start of an array, and returns the new length of the array.
// @param items — Elements to insert at the start of the array.
console.log("Learning unshift");
console.log(marks.unshift(90));
console.log(marks);

console.log(marks.unshift(34,56,98));
console.log(marks);