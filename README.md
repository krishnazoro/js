<h1>Java script</h1>

# What is javascript?

1. Javascript is a popular and widely used language.

2. 69.8% companies using this language.

3. companies like Netflix,Paypal,Walmart.

4. If learn js became a frontend developer,backend developer.

## What can you do with javascript?

1. For a long time js is used for build interactive web page.

2. This days we can build full blown mobile and web apps and real time networling apps like video streaming,chats and even games.

## where does js code run?

1. Js code designed to run in only browser,so every browser has javascript engine that execute js code.

2. For example, the js engine in firefox,chrome,spider monkey and v8.

3. in 2009 brain doll he took js engine and embedded inside in c++ program and it is called as "NODE".

4. Node is a c++ program that includes google,v8 and js engine.

5. Now we can run a run js code in outside of browser now we pass our js code to node for execution,and this mean js can build back end for web application.

6. In nut shell js run inside for provide run time envinronment.

## Js vs Ecmas script?

### Ecmas script

1. Ecmas script it just a specfication.

2. Ecmas script is responsible for standard and they responsible for script specification.

3. It define many feature of js.

### js

1. Js is a programming language and that confirms specification.

2. Js don't need any other additional tools.

3. Every browser contain js engine.

# Java script in browser

1. Js we need a script element we can script element in head section or body section.

```

<!doctype html>
<html>
<head>
<title>my first js program</title>
</head>
<body>
<h1>hello world</h1>
<script>
console.log('program');
</script>
</body>
</html>


```

2. Save the program and press alt + I on windows.

# Seperations of concerns

1. Let's learn about how to seperate html and js?

2. first open the explorer file and click add file and type file name.js.

3. Cut the js code and paste at file name.js.

4. `<script src="index.js"></script> `

# Javascript in node

1. To run js in node open a prompt if your lap in windows ,if your mac open a terminal.

2. Type node file name.js

3. Output will be executed.

# Js code vs node js

## js code

1. Js code only run at browser and the program run at server.

2. It is only for frontend.

3. Js code only run browser.

## node js

1. node js program look like c++ but it will read js program and the output display like js code.

2. It can run at any terminal.

3. It is only for backend.

---

# Basics

# Variable

1. It is store something,it store real or imaginary number.

2. It is stored in some location.

3. At this name we can read the data at this location in the future.

4. For programming Var keyword had be declared but it has some issues we are Es6 orgaization use let keyword.

5. Structure be like 'let firstName'.

let - variable type

name - variable name

6.We can declare a string in single or duble quotes.

## Rules

1. Cannot be resvered a keyword.
   eg: `let if = 'super';`
   if is a keyword.

2. Name should be meaning full.
   eg: `let c = 'super'`

3. Cannot start with a number.
   eg: `let 1name = 'super'`

4. cannot contain a space or hyphen.
   eg: `let na-me = 'super'`

5. Multiple words should be in camel case.
   eg: `let firstName = 'Krishna Kumar'`

# Constant

1. In constant we cannnot change the variable.

# Primitive type

1. Basically variable in js it has more types we seen strings but we have seen more types.

2. In js we have two types

- Primitive type or value type

- Reference type

## Primitive type

1. The primitive types category are

- String
  eg:let name ='krish';

- Number
  eg:let age = 21;

- Boolean
  eg:let approve = true or false;

- Undefined
  eg:let firstName = undefined;

- Null
  eg:let lastName = null;

## Reference type

1. Reference type of category are

- Object

- Array

- Function

## Object

1. In object we can store a variable,string,number,array,boolean,etc..

2. we can create a object key value inside the object, array and function.

3. For example

```
  let person = {
   name: 'krish'
   age: 21
  };
  console.log(person);

```

## Array

1. Array has multiple variable,numbers,strings and it covered by square bracket seperated by comma.
   Eg: `let selectcolor = ['red','blue,'green'];`
2. In js array can mixed with string and numbers.
   Eg: `let selectcolor = ['red','blue,'green',1];`

## Function

1. Function is used for call a variable or number.
   syntax

```
function name(){
   body
}
name();
```

# Dynamic Type

1. Js is a dyanamic language.

- Static language
  It cannot be changeable in future.
- Dynamic language
  it is changeable in future.

### Conditional

- `<` bigger mouth side is bigger.
- `>` smaller mouth side is smaller.

---

# Operator

# Javascript operator

1. js has various operartor.
2. operator is used to maths operation.

- Arithmetic operator
- Assingment operator
- Comparsion operator
- Equality operator
- Ternary operator
- Logical operator
- Logical operator with non boolean operator
- Bitwise operator

## Arithmetic operator

1. In arithmetic operator we can assign and operate values with the help of +, -, \*, /, \*\*, %,++,--.

## Assignment operator

1. The assignment operator in programming assigns a value to a variable,linking the variable such as '='.
2. The assignment operator symbols are =, -=, +=, /=, \*=, %=, ^=, |=, \*\*=.

```
let a=10;
a+=5;
console.log(a);

```

## Comparision operator

1. It is also known as relative operator it compare the two operand by >, <, >=, <=, ===, !== this operator.
   eg:

```
let a=10;
let b=5;
console.log(a >= 5);
```

## Equality operator

1. It is loose equality operator.
2. The symbol of equality operator is ==.
   for example

```
let a = 1;
let b = '1';
console.log(1 == '1');
 it say's True
```

## Ternary operator

1.  It is also known as conditional operator.
2.  if the conditional is true the output is true otherwise false.
    for example

```
let score = 110;
let type = score > 100 ? 'pass' : 'fail';
console.log(type);
output:
pass
```

## Logical operator

1. We use this operator based on multiple conditions.
2. There are 3 types of logical operator

- && - And operator
- || - Or operator
- | - not operator

### && operator

1. If the both are true then the output is true
   for example

```
console.log(true && true);
output
true
```

### || operator

1. If the one operand is true the output is true.
   for eg

```
console.log(true || false);
output
true
```

### ! not operator

1. It changes the actual output oppositely.
   for example

```
console.log!(true);
output
false
```

# Logical operator with non - boolean

1. In boolean True or false is not necessary.
   for example

```
- true || true
true
- false || 'mosh'
'mosh'
- false || 1
1
```

2. A variable or number that contain anything is called
   Falsy
   for example

```
 false || 1
1
```

3. Falsy is not a boolean
4. Falsy categorize

- undefined
- null
- 0
- false
- ''(empty string)
- Nan(not a number{not a number is special in js when we dealing with mathematically})

5. Anything that is not falsy that is truthy.
   for example

```
 true || 1
1
```

6. Short circuiting method
   for example

```
 false || 2 || 1
1
```

# Bitwise operator

1. Bitwise operator to 32 bit
2. The symbol is &, |, ^, ~.

---

# Control flow

1. In this operator and expression along with condtional statement
2. conditional operator are two types.

- If else
- Switch case

i. If else

1.  We assign the multiple statement in the condition.
2.  syntax:
    if(condition){
    statement
    }
    else if() {
    statement
    }
    else if(){
    statement
    }
    else
    statement

ii.switch case

1. We assign the multiple case in the condition.
2. Syntax

```
let (name);
switch (true or variable name)
// true for using any condition
case(variable or condition):{
    statement;
    break;
    //repeat the condition no. of usage
default:
statement;
}
```

3. Don't change the order of execuetion.

# Loop

1. The loop is used for repeat a action number of times.
2. There are various kinds of loop.

- For loop
- While loop
- Do...while loop
- For... in loop
- For... of
- Infinite loop

3. They all do the same action but it has different way of method.

## For loop

syntax:

```
for(let i = 0; i < 5; i++ );
console.log('Hello world');

```

1. let i = 0 it is a initial expression and it can be declare before a loop condition.
2. i < 5 it is a condition.
3. i++ it is a increamental expression.
4. For loop for increamenrt example

```
 for(let i = 0; i < 10; i++ ){
 if(i % 2 !==0)
     console.log(i);

 }
```

### Procedure:

- First step :At for loop i= 0 and it compare 0 < 10 if it is true it run the program or exit the program.
- Second step :if loop 0 %(modulo) 2 it check the reminder if the reminder is 0 .
- Third step : it goes to !==0 ,0 !==0 false.it comes to end
  and directly goes to at for loop to increament expression(i++)
  and the 0 is increamented as 1 and repeat the procedure again.

## While loop

1. It is also same as a for loop but variable ,condition,increament expression and console.log should be seperate at this loop.
2. For example

```
let i = 0;
while(i < 10){
    if(i % 2 !==0)
        console.log(i);
    i++;
}
```

## Do...while

1. Every loop execute is loop by entry check if it is true.
2. But in do while loop has exit check .
3. It print the output atleast one time even if it is false.

## Infinite loop

1. It print the output infinite times.
2. So it able to crash the browser.
3. For example

```
let i = 0;
while (i < 5){
    console.log(i);

}
```

4. If you not put the increament expression the infinte loop will execute.

## For...in

1. For in loop is used for looping object properities.
2. For example

### Object

```
 let person = {
     name: 'krishna',
     age:21
 }
 for(let key in person)
 console.log(key,person[key]);
```

### Array

```
let colors = ['red','green','yellow'];
for(let index in colors)
   console.log(index,colors[index]);
```

3. Another example

```
let numbers = [1,2,3,null,false, true];
console.log(countTruthy(numbers));
for (let value in numbers){
    console.log(numbers);
}
```

## For...of

1. For of loop is used for display the item in array.
2. For in for object and for of for array.
3. For of for array.
4. For example

```
let colors = ['red','green','yellow'];
for(let colors of colors)
    console.log(colors);
```

5. Another example

```
let numbers = [1,2,3,null,false, true];
console.log(countTruthy(numbers));
let value;
for(value in numbers) {
    console.log(numbers)
}
```

## Break and continue

1. Break is for break the loop.
2. continue for to iterate the loop.

---

# Objects

## Basics

1. In objects key value can be any thing numbers, aplhabets, function, array anything.

```
let circle = {
    radius: 1,
    location: {
        x: 1,
        y: 2
    },
    isvisble:true,
    draw: function(){
        console.log('draw');

    }
    };
    circle.draw(); // Method

```

2. This called an object oriented programming (oops), oops is defined as in object the function is part of the program is called as oops.

## Factory function

1. Factory function defines it create the object and it return the object when the user called.

2. It is a way to create a multiple objects with similar properities and methods without any duplicates.

```

function createcircle(radius) {
    return {
    radius,
    draw() {
        console.log('draw');

    }
}
}

const circle1 = createcircle(1);
console.log(circle1);

const circle2 = createcircle(2);
console.log(circle2);

```

## Constructor function

1. In constructor function use PascalNotation (every first letter is capital in the pascal notation).

2. It is same as factry function it creates and it doesn't has return keyword but it will return when it call.

```

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const vattam = new Circle(1);
console.log(vattam);

```

## Nature of the object

1. Java script is a dynamic so we can add a new properities, methods or remove existing ones.

2. We cannot reassign the variable once we assigned.

```

let Circle = {
    type = shape;
    color = yellow;

}
 let circle ={}

const vattam = new Circle(1);
console.log(vattam);

```

3. In this program it will be appear error because it reassign the program.

## Constructor property

1. Every object in the js property called constructor.

## Value types vs reference types

1. The Value types are also called as primitive types the value types are

- Number

- String

- Boolean

- Symbol

- Undefined

- Null

2. The reference types are

- Function

- Array

- Object

3. - The variable x is declare the value 10 (x = 10) and the the variable y is x (x = y) and i change the value of x in to 100. and then now the value of x is 100 (x = 100 ) because it is indepence we can change the values. And the value of y is still 10.

- Primitives are copied by their values.

4. - And then the object x is declare the key value is value: 10 (x = {value: 10}) and the and then the y is equal to x and then change the value of x is 100 by the root of object (x.value = 100) and the value of x and y is changed( x = value: 100) and ( y = value: 100)

- Objects are copied by their reference.

## Enumerating (Calculating) properities of an object

1. For in loop is only used for enumerating(calculating) of an object.

# Arrays

## Adding Elements

1. In arrays we can add a numbers in end, middle and beginning.

2. In array constant we cannot change the element but we can modify by using the dot elements.

3. For example

```
const numbers = [3, 4];

<!-- End -->

numbers.push(5,6);

console.log(numbers);

<!-- Beginning  -->

numbers.unshift(1, 2);

console.log(numbers);

<!-- Middle -->

numbers.splice(2, 0, a, b);

console.log(numbers);

```

3. Using push function it add a element in end of an array.

4. Using unshift function it add an elements in beginning of the array.

5. Using splice function it add an elements in the middle of the array.

6. Example for splice function

```
const numbers = [1, 2, 3, 4, 5, 6];

number.splice(2, 0, 'a', 'b');

console.log(numbers);

result: [1, 2, 'a', 'b', 3, 4, 5,, 6]

```

7. number.splice(2, 0, 'a', 'b') 2 is a starting index number, 0 is a number of element need to delete and 'a' and 'b' is need to add in the array.

## Finding elements(primitives)

1. In js indexOf method is used for find the first occurence of a specified value in an array and it returns in index number.

2. In the array element is available it give the element index number if it is not available it returns -1.

3. Like example

```
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.indesOf(1));

Result: 0 //the value 1 is located at 0th index.

```

3. numbers.indexOf(1) means in array the value of 1 is needed and it return the value at index.

```
const numbers = [1, 2, 3, 4, 1, 5];

console.log(numbers.indexOf(1, 2));

Result: 4 // the value 1 is located at 4th index.

```

4. numbers.indexOf(1, 2) it mean 1 is a value and the 2 is the beginning it start 2nd index number to search the value 1.

## Finding elements(Reference)

1.The find () methods return the value of the first element in the array that satisfies the providing testing function.otherwise it returns undefined.

2. For example

```
const courses = [
        { id: 1, name: a },
        { id: 2, name: b }
];

const class = courses.find(function(class){
    return course.name === 'a'

});

console.log(class);

```

3. when we call a element which is not available in the array it returns undefined

```
const courses = [
        { id: 1, name: a }
        { id: 2, name: b }
];

const class = courses.findIndex(function(class){
    return course.name = 'a'

});

console.log(class);

```

3. When we use a findIndex it returns the indexnumber of the array when it is not available in the array it returns -1.

## Arrow function

1. An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:

- Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.

- Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.

- Arrow functions cannot use yield within their body and cannot be created as generator functions.

2. Like example

```
const courses = [
        { id: 1, name: a },
        { id: 2, name: b }
];

const course = courses.find(course => course.name === 'a')

console.log(course);

```

## Removing elements

1. In array we can remove elements in the end, middle, beginning.

2. Like example

```
const numbers = [1, 2, 3, 4];

// End

numbers.pop();
console.log(numbers);

// Beginning

 numbers.shift();
console.log(numbers);

// Middle

numbers.splice(2,2);
console.log(numbers);

```

3. In End the pop function is used to remove the last element.

4. In the beginning the shift function is used to remove the first element.

5. In the middle the splice function is used to remove the middle of the elements.

## Emptying an array

1.  To empty an array there are various methods

```
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

```

## Combining and slicing array

1. For combing the concat function is used to combine one or more arrays.

2. Like example

```

const first = [1, 2, 3];
const second = [3, 4, 5];

const combined = first concat(second);
console.log(combined);

```

3. For seperating a selected elements of an array and return it as a new array is called slice in slice the slice function is used.

4. Like example

```
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = first.concat(second);// For combining

const slice = combined.slice(2,4); // For slice
console.log(slice);
console.log(combined);

```

## Spread operator

1. spread operator is a short form of combining and slicing.

Example for combining

```
// Combining

const first = [1, 2, 3];
const second = [4, 5, 6];

const combining = [...first, ...second ];
console.log(combining);

```

3. Slicing is only used for only copy an array it is a simple copy method.

```
const first = [1, 2, 3];
const second = [4, 5, 6];

const combining = [...first, ...second ];
console.log(combining);

const copy = [... combining];
console.log(copy);

```

## Iterating an array

1. This is also one of the method to loop the array
   forEach() like forOf()

```
// forOf()

const numbers = [1, 2, 3, 4, 5];

for (let aengal of numbers)
    console.log(aengal);

```

```
// forEach()

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number, index) => console.log(numbers, index));

```

## Joining array

1. Joning array is return an array as an string

2. For example

```

const numbers = [1, 2, 3];
const combine = numbers.join(',');
console.log(combine);

```

## Sorting and reversing an array

1. Sorting is used to arrange the array

```
// Sorting

const numbers = [1, 2, 3, 4];
const sorting = numbers.sort();
console.log(sorting);

```

```
// Reversing

const numbers = [1, 2, 3, 4];
const reversing = numbers.reverse();
console.log(reversing);

```

## Testing the elements of an array

1. It is new to js to check all the elements are positive are not.

2. There are two different ways

- every() - all the elements are positive in the array

- some() - atleast one of the elements is positive in the array

3. For example

```
// Every()

const numbers =[ 1, 2, 3, 4, 5];

const allPositive = numbers.every((value) => value >= 0 );

console.log(allPositive);

```

```
Some()

const numbers =[ 1, 2, 3, 4, 5];

const atleastOne = numbers.some((value) => value >= 0 );

console.log(atleastOne);

```

## Filtering

1. Filtering is used to filter anything it is based on condition give by user.

2. It is dynamic

3. for example

```
// To find positive numbers by using filtering

const numbers= [1, 2, 3, 4, 5, 6];

const filtering = numbers.filter((value) => value >= 0);

console.log(filtering);

```

## mapping

1. In js "mapping" refers to the process of creating a new array by applying a function to each element of an existing array.

2. The most common method used for mapping is the map() function, which transforms each element based on a given function and returns a new array with the result

3. For example

```
const numbers = [1, 2, -3, 3, 4, 5];

const items = numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n}));

console.log(items);

```

## Reducing an array

1. Reducing an array in js is the combining of all the elements of the array into a single value using a callback function.

2. This done using the reduce() method.

3. In reduce() method the accumalator and currentvalue are used.

4. This sum process is proceed step by step after finsh 1st step the currentvalue is stored in the accumulator.

5. For example

```
const numbers = [1, -2, 3, 4, 5];
const sum = numbers.reduce
((accumulator, currentvalue) => accumulator + currentvalue );

console.log(sum);
```

# Functions

## Function declaration vs function expression

1. A function declaration in javascript is a way to define a function using the function keyword, followed by the function's name, a list of parameter in parantheses, and a block of code in curly braces.

2. For example

```
// Function declaration

function walk() {
    console.log('Run');
}
walk();

```

// Function expression

1. A function expression in javascript is a way to define a function using the function keyword, but the function is assigned to variable instead of being named directly.

2. For example

```
// Function expression

const run = function() {
    console.log("walk");
};
run()

```

## Hoisting

1. hoisting in javascript is a behavior where variable and function declarations are moved to their top of thir containing scope during the compilation phase, before the code is executed.

2. This means you can use function s or variablesbefore they are declared in the code.

3. For example

```
// Function declaration

walk();

function walk() {
    console.log('Run');
}

```

4. When the call the function before the declaration it will work.

```
// Function expression

run()

const run = function() {
    console.log("walk");
};

```

5. We cannot run the cannot code before initialization.

## Arguments

1. In console.log the the numbers, alphabets, strings are passed in the parameter

2. For example

```
console.log("Hello"); the Hello is called as argument.

```

## Rest operator

1. The rest operator(...) in javascript allow ypu to a bundle the remaining arguments of a function into an array.

2. It makes it easier to handle handle multiple arguments in a more manageable way.

3. for example

```
function sum(discount, ...price) {
    const total = price.reduce((a, b) => a +b);
    return total *(1 - discount);
}
console.log(sum(0.1, 20, 30));

```

## Default parameter

1. In javascript, a default parameter is a value that is automatically assigned to a function parameter if no arguments is provided or if the arguments is undefined .

2. This makes your function more robust and easier to use by providing fallback values.

3. For example

```
function interest(principal, rate, years) {
    return principal * rate / 100 * years;
}

console.log(interest(10000, 2.5, undefined));

```

## Getter and setter

1. In javascript, getter and setter are special methods that allows you to control acess to the properities of an object.

2. Theyhelp encapsulation the internal state and enable better control over how properities are accessed and modifies

3. Getter is access properties and setter is a change (mutate) a object

4. For example

```
const person = {
    firstName: 'Krishna',
    lastName: 'Kumar',
    get fullName(){
        return `$(person.firstName) $(lastName)`
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this. lastName = parts[1];

    }
};
person.fullName = 'Agent Krishna'

console.log(person);

```

## Try and catch

1. Try and catch is a programmming concept used to handle error's.Here's simple definition

- Try: Contains the code you want to execute.

- Catch: Contains the code that handles any errors that occur in the "try" block.

2. It's like setting up a safety net to catch error and handle them gracefully.

3. For example

```
try {
    // Code that may cause an exception
    let result = 10 / 0;
} catch (error) {
    // Code that runs if an exception occurs
    console.log("Oops! You can't divide by zero.");
}

```

## Local scope vs global scope

### Local scope

1. Local scope refers ton variables that are declared within a function.

2. These variables are only accessible and can only be used within that particular function.

3. They cannot be accessed from outside the function.

4. For example

```
// Local scope

function myFunction() {
  let localVar = "I am local";
  console.log(localVar); // This will print "I am local"
}

myFunction();

console.log(localVar); // This will throw an error because localVar is not defined outside myFunction

```

### Global scope

1. Global scope refers to variable that are declared outside of any function or block.

2. These variables are accessible from anywhere in the code, inside and outside functions.

3. For example

```
// Global scope

let globalVar = "I am global";

function myFunction() {
  console.log(globalVar); // This will print "I am global" because globalVar is accessible inside the function
}

myFunction();

console.log(globalVar); // This will also print "I am global" because globalVar is accessible outside the function as well

```

## Let vs var

1. let and var are both used to declare variables, but they have some difference in terms of scope and hoisting

1. Scope:
- var: Function-scoped. A var variable is available throughout the entire function in which it is declared.
- let: Block-scoped. A let variable is only available within the block (i.e., { }) in which it is declared.

2. Hoisting:
- var: Variables declared with var are hoisted to the top of their containing function or global scope. This means you can use the variable before it is declared, but it will be undefined.
- let: Variables declared with let are hoisted to the top of their block, but they are not initialized until the declaration is encountered. This means you cannot use the variable before it is declared.

3. For example

```
// var
function numbers() {
    for (i = 0; i <= 10; i++) {
    console.log('my numbers is #' + i);
    }
    console.log(i);
}
numbers();

```

```
// let

function numbers() {
    for (let i = 0; i <= 10; i++) {
        console.log('my numbers is #' + i);
    }
}
numbers();

```
## The this keyword

1. This refers to the object that is executing the current function. 
 
2. It varies depending on the context in which the function is called.


3. For example

```
const video = {
    title: 'a',
    languages: ['tamil','english'],
    play() {
        console.log(this);
    },
    channel() {
        console.log(this.languages);
    },
 };
 video.channel();

 ```



 



