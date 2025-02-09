const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'},
];

const course = courses.find(function(course) {
return course.name === 'a';

});

console.log(course);



// when we call an element which is not available in the array

const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'},
];

const course = courses.find(function(course) {
return course.name === 'x';

});

console.log(course);


// we can call a id 

const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'},
];

const course = courses.find(function(course) {
return course.id === 1;

});

console.log(course);


// When we use a findIndex it returns the index

const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'},
];

const course = courses.findIndex(function(course) {
return course.name === 'b';

});

console.log(course);

// when we call an element which is not avilable in the array by using findIndex

const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'},
];

const course = courses.findIndex(function(course) {
return course.name === 'x';

});

console.log(course);