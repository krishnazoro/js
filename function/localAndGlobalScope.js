// Local scope

function myFunction() {
    let localVar = "I am local";
    console.log(localVar); // This will print "I am local"
  }
  
  myFunction();
  
  console.log(localVar); // This will throw an error because localVar is not defined outside myFunction


// Global scope

const color = 'red';

function brother() {
    const message = 'read';
    const color = 'yellow';
    console.log(color);
    console.log(message);
    
}
brother();

console.log(color);


// Another example global scope

let globalVar = "I am global";

function myFunction() {
  console.log(globalVar); // This will print "I am global" because globalVar is accessible inside the function
}

myFunction();

console.log(globalVar); // This will also print "I am global" because globalVar is accessible outside the function as well