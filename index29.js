//forEach updates and modifes the original array
//map returns a new array, doesn't modify the original array
/*map(callbackfn: (value: number, index: number, array: number[]) => any, thisArg?: any): any[]
A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

Calls a defined callback function on each element of an array, and returns an array that contains the results.*/
var num = [2, 4, 6, 8, 10];

num.map((value) => {
    console.log(value+10);
})

console.log(num);

// let numbers  = num.map((val) => {
//     val = val + 50;
// })

// console.log(numbers);