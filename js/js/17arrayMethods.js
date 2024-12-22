// Array Methods in JavaScript

// Define an array
let num = [1, 2, 3, 34, 4];

/* 
1. toString() - Converts an array to a string of comma-separated values.
*/
let b = num.toString(); // b is now a string "1,2,3,34,4"
console.log(b, typeof b); // Output: "1,2,3,34,4" string

/* 
2. join() - Joins all elements of the array into a string, separated by a specified separator.
*/
let c = num.join(" and "); // Joins elements with " and "
console.log(c, typeof c); // Output: "1 and 2 and 3 and 34 and 4" string

/* 
3. push() - Adds new elements to the end of an array and returns the new length of the array.
*/
let r = num.push(56); // Adds 56 to the end of the array
console.log(num, r); // Output: [1, 2, 3, 34, 4, 56] 6

/* 
4. pop() - Removes the last element from an array and returns it.
*/
// let r = num.pop();
// console.log(num, r); // Output: [1, 2, 3, 34] 4

/* 
5. shift() - Removes the first element from an array and returns it.
*/
// let r = num.shift();
// console.log(r, num); // Output: 1 [2, 3, 34, 4]

/* 
6. unshift() - Adds new elements to the beginning of an array and returns the new length of the array.
*/
// let r = num.unshift(78);
// console.log(r, num); // Output: 6 [78, 1, 2, 3, 34, 4]

/* 
7. delete - Removes the element at the specified index without affecting the length of the array.
*/
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// delete num[0];
// console.log(num.length); // Output: 9 (element is removed but length is unchanged)

/* 
8. concat() - Merges two or more arrays into a new array.
*/
// let num_more = [11, 12, 13, 14, 15];
// let num_even_more = [211, 212, 213];
// let newArray = num.concat(num_more, num_even_more);
// console.log(newArray); // Output: [1, 2, 3, 34, 4, 11, 12, 13, 14, 15, 211, 212, 213]

/* 
9. sort() - Sorts an array alphabetically or based on a compare function.
10. reverse() - Reverses the elements of an array.
*/
// let compare = (a, b) => {
//   return b - a; // Descending order sort
// };
// let num = [551, 22, 3, 14, 5, 6, 7, 8, 229];
// num.sort(compare); // Sort in descending order
// console.log(num); // Output: [551, 229, 22, 14, 8, 7, 6, 5, 3]

/* 
11. splice() - Adds/removes items to/from an array, and returns the removed items.
Syntax: array.splice(start, deleteCount, item1, item2, ...)
*/
let num2 = [551, 22, 3, 14, 5, 6, 7, 8, 229];
// let deletedValues = num2.splice(2, 4, 1021, 1022, 1023, 1024);
// console.log(num2); // Output: [551, 22, 1021, 1022, 1023, 1024, 7, 8, 229]
// console.log(deletedValues); // Output: [3, 14, 5, 6]

/* 
12. slice() - Extracts a part of an array and returns a new array. The original array is not modified.
Syntax: array.slice(start, end)
*/
let newNum = num2.slice(3, 5); // Extracts elements from index 3 to 4 (end index is not included)
console.log(newNum); // Output: [14, 5]
