const person = {
    firstName: 'Krishna',
    lastName: 'Kumar',
    get fullName(){
        return `$(person.firstName) $(lastName)`
    },
    set fullName(value) {
       if (typeof value !== 'string') 
        throw new error('value is not a string');
    
        const parts = value.split(' ');
        if(parts.length !== 2)
            throw new error('enter a first name and last name')
        
        this.firstName = parts[0];
        this. lastName = parts[1];

    }
};
try{
    person.fullName = 'null';
}

catch(e){
    alert(e);
}

console.log(person); 



try {
    let numerator = 10;
    let denominator = 0;

    if (denominator === 0) {
        throw new Error("Division by zero is not allowed.");
    }

    let result = numerator / denominator;
    console.log("Result:", result);
} catch (error) {
    console.error("An error occurred:", error.message);
}