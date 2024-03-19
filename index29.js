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


/*Since the callback function doesn't explicitly return anything (it only modifies the local val), the new array gets filled with undefined (the default return value when no return statement is present).*/

/*let numbers  = num.map((val) => {
    val = val + 50;
})

console.log(numbers);*/


let numbers  = num.map((val) => {
    return val + 50;
})

console.log(numbers);


let numbers1  = num.map((val) =>  val + 50);

console.log(numbers1);