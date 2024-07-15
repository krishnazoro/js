console.log(sum(1000));

function sum(limit) {
    let result = 0;
    for (let i = 0; i <= limit; i++)
        if ( i % 3 === 0 || i % 5 === 0)
            result = result + i;
    return result;
}