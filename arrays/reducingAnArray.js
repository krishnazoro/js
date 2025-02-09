const numbers = [1, -2, 3, 4, 5];

// a = 1,  c = -2 =>  a = -1
// a = -1, c = 3  =>  a = 2
// a = 2,  c = 4  =>  a = 6
// a = 6,  c = 5  =>  a = 11
const sum = numbers.reduce((accumulator, currentvalue) => accumulator + currentvalue );   

console.log(sum);