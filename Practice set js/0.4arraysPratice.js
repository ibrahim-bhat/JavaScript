//q1 create and array of numbers and take input from the user to add number to this array
let numbers = [1, 2, 3, 4, 5 , 20];
numbers.push(6);
console.log(numbers , "\n\n");


// let addNum = parseInt(prompt("Enter a number to add to the array"));
// numbers.push(addNum);
// console.log(numbers);

//Q2 keep adding numbers to the array until 0 is added to the array

/*
do {
  let numbers = [1, 2, 3, 4, 5];
  numbers.push(0);
} while (numbers != 0);
{
  console.log(numbers);
}
  */               //Pending for later when shifted to console


//Q3 filter for number divisible by 10 from a given array
const evens = numbers.filter((number) => number % 10 === 0); 
console.log(evens);

//Q4 Create an array of square of given number 
let square = numbers.map((number) => number ** 2);
console.log(square);