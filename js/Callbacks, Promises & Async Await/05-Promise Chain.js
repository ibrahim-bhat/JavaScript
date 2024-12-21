const getData = (pro) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(pro);
      resolve("Promise resolved");
    }, 2000);
  });
};

// Promise chain

// getData(1).then((res) => {
//   console.log(res);
//   getData(2).then((res) =>{
//     console.log(res);
//     getData(3).then((res) =>{
//         console.log(res);
//     })
//   })
// });


// another method
getData(1).then ((res) =>{
    console.log(res);
    return getData(2);
}).then ((res) =>{
    console.log((res));
    return getData(3);
});
