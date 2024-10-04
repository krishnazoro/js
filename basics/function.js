function greet(){

    console.log("Hi");
}
greet();
 

 function greet(name){
    console.log("Hi",name);
 you call use ('Hi', name) or ('Hi'+ name)
}
calling the function using a variable
let name = 'ravi'
    greet(name);
 

  function greet(name){
        console.log("Hi"+ name);
  }
  // Calling the function using 'string'
      greet('krish');
        greet('kumar');


function to find the square of a number
function square(number){ // declaration of function with 1 input parameter
    return number*number; // output parameter
}

console.log( square(2) );
