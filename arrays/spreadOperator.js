// For combining 

const first = [1, 2, 3];
const second = [4, 5, 6];

const combining = [...first, ...second ]; 
console.log(combining);


// In combining method we can add a element easily 

const first = [1, 2, 3];
const second = [4, 5, 6];

const combining = [1,...first, 'a', ...second ];
console.log(combining);

// for slice

const first = [1, 2, 3];
const second = [4, 5, 6];

const combining = [...first, ...second ];
console.log(combining);

const copy = [... combining];
console.log(copy);