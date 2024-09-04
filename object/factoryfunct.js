function createcircle(radius) {
    return {
    radius,
    draw() {
        console.log('draw');

    }
}
}

const circle = createcircle(1);
console.log(circle);

const circle2 = createcircle(2);
console.log(circle2);
