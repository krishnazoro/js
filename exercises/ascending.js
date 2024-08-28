//  let number = [1,6,,3,7,10,20,19];
//  number.sort();
//  console.log(number)

//  let number = [1, 6, 3, 7, 10, 20, 19];
//  number.reverse()
//   console.log(number)

// let animal = ['dog','elephant','zebra','duck','ant','cat'];
// animal.sort();
// console.log(animal);

let numbers =[34,17,45,23,67,76];
console.log("orginal numbers",numbers);
for(i = 0 ;i<=numbers.length;i++){
    for(j = i+1;j<numbers.length;j++){
       if( numbers[i]>numbers[j]){
            let temp = numbers[j];
            numbers[j]=numbers[i]
            numbers[i] = temp;
       }
    }
    
}
console.log(numbers)
