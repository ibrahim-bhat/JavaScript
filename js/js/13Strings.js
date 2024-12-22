//  a string is a primitive data type used to represent textual data. It is a sequence of characters enclosed within either single (' ') or double (" ") quotes.

/* Character Sequence:
Strings are sequences of characters, which can be letters, numbers, symbols, or even whitespace.

Immutable:
Strings in JavaScript are immutable, meaning you cannot modify the characters of a string directly. You can, however, create new strings based on manipulations of existing ones.

Zero-Indexed:
Characters in a string are indexed starting from 0. For example, in the string "Hello", the character 'H' is at index 0, 'e' is at index 1, and so on.

Methods:
JavaScript provides a wide range of methods for working with strings, such as:

length: Returns the length of the string.

indexOf(): Finds the index of a specific character or substring within a string.

substring(): Extracts a portion of the string.

toUpperCase(): Converts the string to uppercase.

toLowerCase(): Converts the string to lowercase. */

let greeting = "Hello, world!";
let name1 = 'ibrahim';


// Template Literals:
// JavaScript also supports a feature called template literals (introduced in ES6), which provides a more convenient way to create strings, especially when working with variables or multi-line strings. Template literals use backticks (`) to delimit the string:

let age = 25;
let message = `Hello, my name is ${name1} and I am ${age} years old.`;
console.log(message)



/*
escape sequence character is a backslash (`\`) followed by a specific character. It allows you to represent special characters within strings that would otherwise be difficult or impossible to include directly.
Common Escape Sequences:
\': Single quote
\": Double quote
\\: Backslash
\n: Newline
\t: Tab
\r: Carriage return
\b: Backspace
\f: Form feed
*/
let message1 = "He said, \"Hello World!\""; 
let message2 = 'ibrahim\'s'
console.log(message2)
console.log(message1); // Output: He said, "Hello World!"