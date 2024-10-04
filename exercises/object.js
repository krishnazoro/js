let bookInfo={
    title:'jungleBook',
    author:'Krishna',
    publishedYear:1972,
    language:'English'

}
// TO add a new properities
bookInfo.jungle = "monkey";
// TO delete a new properities
delete bookInfo.author ;
console.log(     bookInfo.author       );
console.log(bookInfo);
console.log("Hi i am", bookInfo.author,"and my mother tongue is",bookInfo.language)
console.log(`hi i am ${bookInfo.author} and my mother tongue is${bookInfo.language}`)

function person(name,age){
    this.name = "krish",
    this.age = 21;

}
person.prototype gender = "male";

let yuva = { };

yuva.name = 'krish';
yuva.surname = 'kumar';
console.log(yuva);
yuva.surname = 'jaffer';
console.log(yuva);
delete yuva.surname;
console.log(yuva);














