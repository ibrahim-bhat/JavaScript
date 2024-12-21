//q1 create a variable of type string and try to add number to it

let a = "ibrahim";
let b = 10;

console.log(a + b);

//q2 use type of opertor to find the datatype of the string in the last question?

console.log(typeof a, typeof b);

//q3 create a const object in js . can you change it to hold the number later
const a1 = {
  name: "Harry",
  section: 1,
  isPrincipal: false,
};

//q4 try to add new key to the object in the q3

a1["friend"] = "ziddi";
console.log(a1);

//q5 write a js program to create a word meaning dictonary of 5 words

const dictonary = {
  appreciate: "recognize the full worth of.",
  ataraxia: "a state of freedom from emotional disturbance and anxiety",
  yakka: "work, especially hard work.",
};

console.log(dictonary['yakka']);