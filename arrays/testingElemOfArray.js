// To all elements are positive

const numbers =[ 1, 2, 3, 4, 5];

const allPositive = numbers.every((value) => value >= 0 );

console.log(allPositive);

// Atleast one positive in the elements

const numbers =[ -1, -2, -3, -4, 5];

const atLeastOne = numbers.some((value) => value >= 0 );

console.log(atLeastOne);