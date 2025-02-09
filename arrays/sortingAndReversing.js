// Sorting

// const numbers = [1, 2,4, 3];
// const sorting = numbers.sort();
// console.log(sorting);
// 
// Reversing

// const numbers = [1, 2, 3, 4];
// const reversing = numbers.reverse();
// console.log(reversing);

// Sorting using id

const courses = [
    { id: 1 , name: 'Node js' },
    { id: 2 , name: 'javascript'},
];
courses.sort(function(a, b) {
    // a < b => -1
    // a > b => 1
    // a === b => 0

    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if(nameA < nameB) return -1;
    
    if(nameA > nameB) return 1;

    return 0
});

console.log(courses);
