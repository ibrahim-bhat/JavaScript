// Operators: Symbols that perform operations on operands (values or variables). 
// Examples:
// Arithmetic operators: +, -, *, /, %
// Comparison operators: ==, ===, !=, !==, >, <, >=, <=
// Logical operators: &&, ||, !
// Assignment operators: =, +=, -=, *= etc.
// Expressions: Combinations of values, variables, and operators that produce a result. 


// Arithmetic Operators 
let a = 10;
let b = 4;
console.log("a + b = ", a + b)
console.log("a - b = ", a - b)
console.log("a / b = ", a / b)
console.log("a ** b = ", a ** b)
console.log("a % b = ", a % b)
console.log("++a = ", ++a)
console.log("a++ = ", a++)
console.log("--a = ", --a)
console.log("a-- = ", a--)
console.log("a = ", a)
console.log("a-- = ", a--)

// Assignment Operators 
let assignment = 1;
assignment += 5 // same as assignment = assignment + 5
console.log("a is now = ", assignment)
assignment -= 5 // same as assignment = assignment - 5
console.log("a is now = ", assignment)
assignment *= 5 // same as assignment = assignment * 5
console.log("a is now = ", assignment)
assignment /= 5 // same as assignment = assignment / 5
console.log("a is now = ", assignment)

// Comparison Operators 
let comp1 = 6;
let comp2 = 7;
console.log("comp1 == comp2 is ", comp1 == comp2)
console.log("comp1 != comp2 is ", comp1 != comp2)
console.log("comp1 === comp2 is ", comp1 === comp2)
console.log("comp1 !== comp2 is ", comp1 !== comp2)
console.log("comp1 > comp2 is ", comp1 > comp2)

// Logical Operators
let x = 5;
let y = 6;
console.log(x<y && x==5);
console.log(x>y || x==5);
console.log(!false);
console.log(!true);

// Comments
// This is a single line comment
/* This is a sample multiline comment */