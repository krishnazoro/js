class Car {
    static numbersofcars = 0;
    constructor(name, years ){
        // static variable
        this.name = name;
        this.years = years;
        Car.numbersofcars++;
    }

    budget(){
        console.log('The bubget of',this.years);
        console.log('The name of',this.name);
    }

}

    let firstCar = new Car('hyundai', 2020);
    let secondCar = new Car('mahendra', 2024);
    let thirdCar = new Car('KIA', 2021);

    console.log(Car.numbersofcars)

    firstCar.budget();
    secondCar.budget();
    
    // In future if you don't understand watch logic first tamil youtube channel.

    
    
