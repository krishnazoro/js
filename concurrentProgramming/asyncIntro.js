console.log("Start");// f1

function sync() { // f2 but not executed
    console.log('step 1');// f3
    console.log('step 2');// f4
    console.log('step 3');// f5
}
sync();// f2 is executed and completed

let a = 10;
let b = 20;
let c = a + b;

setTimeout(() => console.log('step 1'),3000); // f6
setTimeout(() => console.log('step 2'),2000); // f7
setTimeout(() => console.log('step 3'),1000); // f8

console.log("End");// f9

// If you don't understand the program, console.log("Start");// f1

function sync() { // f2 but not executed
    console.log('step 1');// f3
    console.log('step 2');// f4
    console.log('step 3');// f5
}
sync();// f2 is executed and completed

let a = 10;
let b = 20;
let c = a + b;

setTimeout(() => console.log('step 1'),3000); // f6
setTimeout(() => console.log('step 2'),2000); // f7
setTimeout(() => console.log('step 3'),1000); // f8

console.log("End");// f9

//  If you don't undestand the program in the future watch the logic first tamil youtube channel.
// They say about how the async program works.

