let film = {
    name: 'jigarthand',
    year: 2018,
    date: 9,
    director: 'karthik subraj'
};


 showProperities(film);
 
function showProperities(obj) {
    for(let key in obj) {
        if ( typeof obj[key] === 'string')
            console.log(key, obj[key]);
    }
}      
    
 