// Var

// function numbers() {
//     for (i = 0; i <= 10; i++) { // There is no declaration of variable type for i so it is automically var variable type. var is global scope but need call the i within the function bracket don't call outside the function bracket.
//     console.log('my numbers is #' + i);
//     }
//     console.log(i);
// }
// numbers();


// let

function numbers() {
    for (let i = 0; i <= 10; i++) {
        console.log('my numbers is #' + i); // Let is a local scope call within a for loop
    }
}
numbers();