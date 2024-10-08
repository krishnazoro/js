function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
} 
const vattam = new Circle(1);
console.log(vattam);
