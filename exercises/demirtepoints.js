// Speed limit is 70.
// If you cross every limit at every 5km 1 point will be added. 
// The limited points is 12 when reached a 12 license suspended.
// Math floor(eg: 3.5 = 3)

checkspeed(130);
function checkspeed(speed) {
    const limitspeed = 70;
    const kmperpoint = 5;
    
    if(speed <= limitspeed) 
        console.log('ok');
    else {
        const points = ((speed - limitspeed) / (kmperpoint));
        if(points >= 12)
            console.log('license suspended');
        else
            console.log('points',points);
       
    }
}
