// some array method

// 1. Map
// Purpose: Creates a new array by applying a function to each element of the original array.
// The original array is not changed. no need to use the loops

let num = [1 ,2 , 3, 4];

num.map((val) => {
    return val * 2;
})


// 2. Filter
// Purpose: Creates a new array containing only elements that meet a certain condition.
// The original array is not changed.


let filterarr = num.filter((vale) =>{ return vale % 2 ==0})
console.log(filterarr);



// 3. Reduce
// Purpose: Combines all elements of an array into a single value by applying a function. or reduce the array to a single value . it return that single value

// The original array is not changed.

