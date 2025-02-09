// To find even numbers by using filtering

const numbers= [1, 2, 3, 4, 5, 6];

const Even =((numbers) => numbers % 2 === 0); 

const filtering = numbers.filter(Even);

console.log(filtering);

// To find positive numbers by using filtering

const numbers= [1, 2, 3, 4, 5, 6];

const filtering = numbers.filter((value) => value >= 0);

console.log(filtering);
