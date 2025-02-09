// Sum of arguments by using rest operators

function sum(... arguments) {
    return arguments.reduce((total, arguments)=> total + arguments);
}
console.log(sum(1, 2, 3));


function sum(discount, ...price) {
    const total = price.reduce((a, b) => a +b);
    return total *(1 - discount);
}
console.log(sum(0.1, 20, 30));
