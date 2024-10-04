
let scoredmarks = 99;
switch (true) {
    case(scoredmarks >= 90 && scoredmarks <= 100):
    console.log('grade A');
    break;

    case(scoredmarks >= 80 && scoredmarks <= 89):
    console.log('grade B');
    break;

    case(scoredmarks >= 40 && scoredmarks <= 79):
    console.log('grade C');
    break;

    default:
    console.log('grade F');
}
