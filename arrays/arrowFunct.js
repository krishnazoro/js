const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
];

const course = courses.find(course => course.name
=== 'a')

console.log(course);

// when the element is not available in the arrow function

const courses = [
    { id: 1, name: a },
    { id: 2, name: b }
];

const course = courses.find(course => course.name === 'a');

console.log(course);