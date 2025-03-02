// Parent class

class Car {
    static numbersofcars = 0;
    constructor(name){
        // static variable
        this.name = name;
        Car.numbersofcars++;
    }

    budget(){
        console.log('The name of',this.name);
    }

}


// Child class

class Price extends Car{
    constructor (name, color) {
        super(name);
        this.color = color;

    }

        company() {
            console.log(this.name + ' less price in the market');
            console.log(this.color + ' is available');

        }

    }



let firstCar = new Price('hyundai', 'red');


console.log(Car.numbersofcars)

firstCar.budget();
firstCar.company();

// In future if you don't understand watch logic first tamil youtube channel.














