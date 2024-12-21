/* 
 A callback is a function that is passed as an argument to another function and is executed after the first function completes its task. 

 Here's how it works:

 Passing a function as an argument:
In JavaScript, functions are first-class citizens, which means you can treat them like any other variable. This allows you to pass a function as an argument to another function.

Executing the callback function:
The function that receives the callback function as an argument is responsible for calling it at the appropriate time. This is often done after completing some asynchronous operation, such as fetching data from a server or waiting for a timer to expire.
*/

function greet(name, callback) {
  console.log('Hello, ' + name + '!');
  callback(); // Execute the callback function
}

function sayGoodbye() {
  console.log('Goodbye!');
}

greet('ibrahim', sayGoodbye); // Pass the sayGoodbye function as a callback