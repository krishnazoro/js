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

 ````

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


 ````

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

2.  In js we have two types 

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
1. In arithmetic operator we can assign and operate values with  the help of +, -, *, /, **, %,++,--.

## Assignment operator
1. The assignment operator in programming assigns a value to a variable,linking the variable such as '='.
2. The assignment operator symbols are =, -=, +=, /=, *=, %=, ^=, |=.
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
 1. It is also known as conditional operator.
 2. if the conditional is true the output is true else false.
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
2. syntax:
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
 - For
 - While
 - Do...while
 - For... in
 - For... of
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

