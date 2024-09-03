function Book(title,author,yearPublished) {
    this.title = title,
    this.author = author,
    this.yearPublished = yearPublished } 
 const manga = new Book("Art of war","kiyoshi",2023);


 
console.log("hi the title of book",manga.title,"and the author name",manga.author,"and the published year is",manga.yearPublished);