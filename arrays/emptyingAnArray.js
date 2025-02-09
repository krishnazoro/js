let numbers = [1,2,3,4];
 let anothers = numbers; // // (Use this step only for 4 th solution)

// Solution 1

numbers = [];

// solution 2 

numbers.length = 0;

// Solutions 3

numbers.splice(0, numbers.length);

// Solution 4 ( Don't use this more)

while(numbers.length > 0)
    numbers.pop();
console.log(numbers);
console.log(anothers);


