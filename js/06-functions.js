// Explanation: Arrow functions provide a shorter syntax for functions in JavaScript.
// Syntax: (parameters) => expression OR (parameters) => { statements }

// Example 1: Simple Arrow Function
const add = (a, b) => a + b;
console.log(add(5, 3)); // Outputs: 8

// Example 2: Arrow Function in forEach
const numbers = [1, 2, 3, 4];
numbers.forEach((num) => console.log(num));
// Outputs: 1, 2, 3, 4










// --for each

// Q: What is forEach?
// forEach is used to execute a function once for each element in an array.
// Syntax: array.forEach(callback(currentValue, index, array));

// Examples of forEach:

// Example 1: Basic Usage
const marks = [85, 97, 44, 37, 76, 60];
marks.forEach(function (value) {
  console.log(value); // Outputs: 85, 97, 44, 37, 76, 60
});

// Example 2: Using Index
marks.forEach(function (value, index) {
  console.log(`Index ${index}: ${value}`);
});
// Outputs:
// Index 0: 85
// Index 1: 97
// Index 2: 44
// Index 3: 37
// Index 4: 76
// Index 5: 60

// Example 3: Using Arrow Function
marks.forEach((value) => console.log(value));
// Outputs: 85, 97, 44, 37, 76, 60

// Example 4: Modifying Elements
marks.forEach(function (value, index, array) {
  array[index] = value + 5; // Adds 5 to each mark
});
console.log(marks);
// Outputs: [90, 102, 49, 42, 81, 65]

// Example 5: Summing Elements
let sum = 0;
marks.forEach(function (value) {
  sum += value;
});
console.log(`Total Sum: ${sum}`); // Outputs: Total Sum: 429



// A higher-order function is a function that either:
// Takes one or more functions as arguments, or  Returns a function as its result.
// Higher-order functions allow us to work with functions in a flexible, reusable, and modular way.

// Higher-order function: Accepts a function as an argument
function greet(name, formatFunction) {
    return formatFunction(name);
}

// Callback functions
const toUpperCase = (str) => str.toUpperCase();
const toLowerCase = (str) => str.toLowerCase();

console.log(greet("Ibrahim", toUpperCase)); // Outputs: IBRAHIM
console.log(greet("Ibrahim", toLowerCase)); // Outputs: ibrahim
