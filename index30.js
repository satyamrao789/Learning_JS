// If the condition (val >= 10 && val <= 50) is false, the function doesn't explicitly return anything. This results in the default return value (undefined) being used for those elements in the new array.
// New Array: The map function creates a new array (numbers2) containing the return values from the callback function for each element. So, you get undefined for elements that don't meet the condition and the original value for elements that do.

num = [2, 5, 8, 10, 22, 33, 77]
let numbers2 = num.map((val) => {
    if (val >=10 && val <= 50) {
        return val;
    }
    
})

console.log(numbers2);