// let passMark = 35;
// let scoredMark = 6;
// if(scoredMark >= passMark){
//     console.log("Pass");
// }
// else{
//     console.log("fail");
// }

// function getResult(scoredMark) {
//     return scoredMark >= 35 ? "Pass" : "Fail";
// }

// console.log(getResult(4))

// let passMark = 35;
// let scoredMark = 87;
// switch(true) {

//     case(scoredMark >= 90 && scoredMark <= 100):
//     if(scoredMark % 2 === 0){
//         console.log("Grade A and the mark is even number");
//     }
//     else if (scoredMark % 2 !== 0 ) {

//             console.log("Grade A and the mark is odd number");
//         }

//     break;

//     case(scoredMark >= 80 && scoredMark <= 89):
//     if(scoredMark % 2 === 0){
//         console.log("Grade b and the mark is even number");
//     }
 
//     else if (scoredMark % 2 !== 0 ) {

//         console.log("Grade B and the mark is odd number");
//     }
//     break;

//     case(scoredMark >= 70 && scoredMark <= 79):
//     if(scoredMark % 2 === 0){
//         console.log("Grade c and the mark is even number");
//     }

//     else if (scoredMark % 2 !== 0 ) {

//         console.log("Grade c and the mark is odd number");
//     }
//     break;

//     case(scoredMark >= 60 && scoredMark <= 69):
//     if(scoredMark % 2 === 0){
//         console.log("Grade d and the mark is even number");
//     }

//     else if (scoredMark % 2 !== 0 ) {

//         console.log("Grade D and the mark is odd number");
//     }
//     break;

//     case(scoredMark >= 50 && scoredMark <= 59):
//     if(scoredMark % 2 === 0){
//         console.log("Grade e and the mark is even number");
//     }

//     else if (scoredMark % 2 !== 0 ) {

//         console.log("Grade E and the mark is odd number");
//     }
//     break;

//     case(scoredMark >= 0 && scoredMark <= 49 ):
//     console.log("Grade F")
//     break;

//     case(scoredMark > 100):
//     console.log("Error");
//     break;

//     case(scoredMark < 0 || scoredMark > 100):
//     console.log("Error");
//     break;

// }

const getGrade = (scoredMark) => {
  let evenOdd;
  if (scoredMark < 0 || scoredMark > 100) {
    return "Mark should be 0 to 100";
  } else {
    evenOdd = scoredMark % 2 == 0 ? "Even Number" : "Odd Number";
  }

  switch ((mark = scoredMark)) {
    case scoredMark >= 90:
      return "A grade " + evenOdd;
    case scoredMark >= 80:
      return "B grade " + evenOdd;
    case scoredMark >= 70:
      return "C grade " + evenOdd;
    case scoredMark >= 60:
      return "D grade " + evenOdd;
    case scoredMark >= 50:
      return "E grade " + evenOdd;
    default:
      return "F grade ";
      break;
  }
};

console.log(getGrade(89));
