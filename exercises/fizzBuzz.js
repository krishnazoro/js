// Divisible by 3 = Fizz
// Divisible by 5 = Buzz
// Divisible by 3 and 5 = FizzBuzz
// Not divisible by 3 and 5 = Input
// Not a number (boolean or variable) =  'Not a number'

const output = fizzBuzz(false);


function fizzBuzz(input) {

    switch (true) {
        
        case (typeof input !== 'number'):
            console.log('Not a number');
            break;

        case((input % 3 === 0) && (input % 5 === 0)):
            console.log('fizzBuzz');
            break;

        case(input % 3 === 0):
            console.log('fizz');
            break;

        case(input % 5 === 0):
            console.log('Buzz');
            break;
        }
}



