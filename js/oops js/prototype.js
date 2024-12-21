/* a javascript object is an entity having state and behaviour( properties and method)
    js object have a special property called prototype a prototype is a mechanism by which objects inherit properties and methods from one another.(its and refrence to an object)


*/

// object
const employee = {
    calcTax(){
        console.log('10% tax');
    },
};

// prototype
const ibrahim = {
    salary: 10000,
};

const ibrahim2 = {
  salary: 20000,
  calcTax(){
    console.log('20% tax');
  }
};


ibrahim.__proto__ = employee;

console.log(ibrahim.calcTax())
console.log(ibrahim2.calcTax());
