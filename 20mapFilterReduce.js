// 1. Map
// Purpose: Creates a new array by applying a function to each element of the original array.
// The original array is not changed. no need to use the loops
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((number) => number * 2); // Each element is multiplied by 2 //follows the condition
console.log(doubled); // Output: [2, 4, 6, 8]

// Another example using strings
const names = ["Alice", "Bob", "Charlie"];
const greetings = names.map((name) => `Hello, ${name}!`); // Creates a greeting for each name
console.log(greetings); // Output: ["Hello, Alice!", "Hello, Bob!", "Hello, Charlie!"]


// 2. Filter
// Purpose: Creates a new array containing only elements that meet a certain condition.
// The original array is not changed.
const mixedNumbers = [1, 2, 3, 4, 5, 6];
const evens = mixedNumbers.filter((number) => number % 2 === 0); // Selects only even numbers
console.log(evens); // Output: [2, 4, 6]

// Another example filtering strings
const words = ["apple", "banana", "grape", "kiwi"];
const longWords = words.filter((word) => word.length > 5); // Selects words with more than 5 letters
console.log(longWords); // Output: ["banana"]


// 3. Reduce
// Purpose: Combines all elements of an array into a single value by applying a function.
// The original array is not changed.
const moreNumbers = [1, 2, 3, 4];
const sum = moreNumbers.reduce(
  (accumulator, number) => accumulator + number,
  0
); // Adds all numbers together
console.log(sum); // Output: 10

// Another example for finding the maximum value
const values = [5, 12, 8, 130, 44];
const maxValue = values.reduce(
  (max, current) => (current > max ? current : max),
  values[0]
);
console.log(maxValue); // Output: 130
