/* Synchronous means the code run in the particular sequence of instructions given in the programming , Each instructions waite for the previous instructions to complete its executions 
Example */
console.log("one");
console.log("two");
console.log("three");


/* Due to synchronous programming, sometimes imp instructions get
blocked due to some previous instructions, which causes a delay in the UI.
Asynchronous code execution allows to execute next instructions
immediately and doesn't block the flow.*/

console.log("one");
console.log("two");

setTimeout( () =>{
    console.log("three");
} , 3000); //3 seconds 

console.log("four");
