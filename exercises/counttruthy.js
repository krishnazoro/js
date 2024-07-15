// const isactive = true;
// const name ='active'
// if(name)
// console .log ('stripes');


// let numbers = [1,2,3,null,false, true];
// console.log(countTruthy(numbers)); 

function countTruthy(numbers) {

     let count = 0 ;
     for (let value of numbers) 
         if(value)
             count++;
         return count; 
}
let numbers = [1,2,3,null,false, true];
console.log(countTruthy(numbers));

let value;
for (value of numbers)
     console.log(value);

for (value in numbers)
    console.log(value);
