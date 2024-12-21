// Q:- for a given array with marks [85, 97 , 44 , 37 , 76 , 60] find the average marks of entire class

let marks = [85, 97, 44, 37, 76, 60];
let num = 0;

// for(let i =0; i<marks.length; i++){
//     num = num + marks[i];
// }

for(let val of marks){
    num = num + val;
}

 let ans = num / marks.length;
 console.log(ans)




//  q2 

let arr = [250 , 645 , 300 ,900 , 50];
let offer = 0;

    for(let val of arr){
        offer = val / 10;
        console.log(offer)
    }
    