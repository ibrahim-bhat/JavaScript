/*
 ..there are 7 primitive data types:

string: Represents textual data.
number: Represents both integer and floating-point numbers.
bigint: Represents integers of arbitrary size.
boolean: Represents a logical entity, either true or false.
null: Represents the intentional absence of any object value.
undefined: Represents a variable that has not been assigned a value.
symbol: Represents a unique and immutable identifier.
*/



// nn bb ss u - Primitives in Js
let a = null;
let b = 345;
let c = true; // can also be false
let d = BigInt("567") + BigInt("3")
let e = "Harry"
let f = Symbol("I am a nice symbol")
let g //undefined
console.log(a, b, c , d, e, f, g)
console.log(typeof c)

// Non Primitive Data Type - Objects in Js
const item = {
  "Harry": true,
  "Shubh": false,
  "Lovish": 67,
  "Rohan": undefined
}
console.log(item["Shubh"])