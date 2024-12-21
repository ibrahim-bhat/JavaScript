/* 
Async-Await

async function always returns a promise.

async function myFunc( ) { .... }

async and await are keywords used to work with asynchronous code, making it easier to read and write. 
Async:
The async keyword is used to declare an asynchronous function.
An asynchronous function always returns a Promise.
You can use the await keyword inside an async function.
Await:
The await keyword is used to pause the execution of an async function until a Promise resolves.
It can only be used inside an async function.
The value returned by the await expression is the resolved value of the Promise.

await pauses the execution of its surrounding async function until the promise is settled.*/


const getData = (pro) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(pro);
      resolve("Promise resolved");
    }, 2000);
  });
};

// async function to get data
async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
}

getAllData();





/*  IIFE : Immediately Invoked Function Expression

IIFE is a function that is called immediately as soon as it is defined. */