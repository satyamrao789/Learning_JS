/*1. Iteration: The reduce() function iterates over the elements of an array from left to right.

2. Reducer Function: You provide a callback function (the reducer function) that takes two arguments:
  (a). Accumulator (acc): This variable holds the accumulated value during the iteration. It's initialized with either the first element of the array (if no initial value is provided) or a specified initial value.
  (b).Current Element (currentValue): This represents the current element being processed in the iteration.

3.Accumulation: Inside the reducer function, you define the logic for how to combine the current element (currentValue) with the current accumulated value (acc). The return value of the reducer function becomes the new accumulator value for the next iteration.*/

let num = [2,4,5,7,8,9,10];

let numbers = num.reduce( (previous,current) => {
    return previous + current;
})

console.log(numbers);

/*By default, if you don't provide an initial value for the accumulator, the reduce() function will use the first element of the array as the initial accumulator and start from the second element. However, you can explicitly specify an initial value as the second argument to reduce().*/

let digit = [2,4,5,7,8,9,10];

let answer = digit.reduce( (previous,current) => {
    return previous + current;
},100)

console.log(answer);