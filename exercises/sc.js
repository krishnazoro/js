
let scoredmarks = 25;
switch (true) {

    case(scoredmarks >= 80 && scoredmarks <= 90):
    console.log('grade B');
    break;
    
    case(scoredmarks >= 40 && scoredmarks <=80):
    console.log('grade C');
    break;

    case(scoredmarks >= 90):
    console.log('grade A');
    break;

    default:
    console.log('grade F');
}
