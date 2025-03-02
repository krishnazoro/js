const person = {
    firstName: 'Krishna',
    lastName: 'Kumar',
    get fullName(){
        return `$(person.firstName) $(lastName)`
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this. lastName = parts[1];

    }
};
person.fullName = 'Agent Krishna'

console.log(person); 

// In future if you don't understand watch cyberDude Network pvt.ltd youtube channel.


class Temperature {
    constructor(temp) {
        this._temp = temp;
}
get temp(){
    return(this._temp + 'deg celsius');

}
set temper(tempvalue){
    if(tempvalue >= 100)
        console.log('temperature is too high');
    else
        console.log('temperature is normal');
}


}

let tempera = new Temperature(120);
console.log(tempera.temp);//result: 120deg celsius
tempera.temper = 120; // result: temperature is too high

// In future if you don't understand watch logic first tamil youtube channel.