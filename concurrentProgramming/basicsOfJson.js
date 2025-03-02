let json1 = 1;
let json2 = "Krish";
// let json3 = true;
let json4 = [1, 2, 3, 4, 5];
let json6 = `[
    {
        "name":"Krishna",     
        "age": 22
    },
    {
        "name" : "Kumar",
        "age" :23
    },

    {
        "name": "Krish",
        "age": 20
    }
    
]`;
let parsed = JSON.parse(json6);
console.log(parsed);
console.log(json6);


       // notes
1. // Every string should be enclosed in double quotes.

2. // In object key and value should be enclosed in double quotes.
// ex:"name": "Krishna", a name and krishna is an key and value


