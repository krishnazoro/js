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