/* 
Promise is for “eventual” completion of task. It is an object in JS.
In JavaScript, a Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. 

It is a solution to callback hell.

let promise = new Promise( (resolve, reject) => { .... } )
Function with 2 handlers
*resolve & reject are callbacks provided by JS*/

const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      const data = { message: "Data fetched successfully!" };
      // Resolve the promise with the data
      resolve(data);
      // Or reject the promise if an error occurs
      // reject("Error fetching data");
    }, 1000);
  });
};

fetchData()
  .then((data) => {
    console.log(data.message); // Output: "Data fetched successfully!"
  })
  .catch((error) => {
    console.error(error);
  });

// another example
const prom = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("i am a promise");
      resolve("success");
    }, 1000);
  });
};

prom().then((res) => {
  console.log("Promise Fullfilled", res);
});
