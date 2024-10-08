function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

let gakusei = new Circle(1);
console.log(gakusei);

alert("Hi this is Krishna");
