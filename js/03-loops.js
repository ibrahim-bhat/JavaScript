console.log("1. for Loop");
// Executes a block of code a specific number of times
for (let i = 0; i < 5; i++) {
  console.log(i); // Outputs: 0, 1, 2, 3, 4
}

console.log("\n2. while Loop");
// Executes a block of code while a specified condition is `true`
let i = 0;
while (i < 5) {
  console.log(i); // Outputs: 0, 1, 2, 3, 4
  i++;
}

console.log("\n3. do-while Loop");
// Executes the block of code at least once, then continues while the condition is `true`
i = 0;
do {
  console.log(i); // Outputs: 0, 1, 2, 3, 4
  i++;
} while (i < 5);

console.log("\n4. for-of Loop");
// Iterates over iterable objects like arrays, strings, maps, or sets
const arr = [10, 20, 30];
for (const value of arr) {
  console.log(value); // Outputs: 10, 20, 30
}

console.log("\n5. for-in Loop");
// Iterates over the keys (or properties) of an object or the indices of an array

// Example with an object
const obj = { name: "Ibrahim", age: 21 };
for (const key in obj) {
  console.log(`${key}: ${obj[key]}`);
  // Outputs: name: Ibrahim, age: 21
}

// Example with an array
for (const index in arr) {
  console.log(index); // Outputs: 0, 1, 2
}
