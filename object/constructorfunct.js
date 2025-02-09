// constructor for greeting a person object
function Circle(radius) {
    this.radius = radius;

// method
    this.draw = function() {
        console.log('draw');
    };
}

// creating instances of person using the constructor function
const vattam1 = new Circle(1);
const vattam2 = new Circle(2);

// using the greet method
vattam1.draw();
vattam2.draw();
