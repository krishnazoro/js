import { log } from "../utils/logger.js";

// Promise orignal form

const tatkalTicket = new Promise((resolve, reject) => {
  let bookingSucess = false;
  if (bookingSucess) resolve(850);
  else reject();
});
tatkalTicket
  .then((amt) => {
    log("I booked the the ticket sucessfuly " + amt);
  })
  .catch(() => {
    log("I failed to book the ticket");
  });

// using function retuning promise

// // function tatkalTicket() {
// //    return new Promise((resolve, reject) => {
// //        let bookingSucess = false;
// //        if (bookingSucess)
// //            resolve(850)
// //        else
// //            reject()

// //    })
// // }

// //    tatkalTicket().then((amt) => {console.log('I booked the the ticket sucessfuly '+ amt)});
// //    tatkalTicket().catch(() => {console.log('I failed to book the ticket')});

// types of promises

// const car1 = new Promise((resolve,reject) => {
//     const reached =true;
//     if(reached)
//         setTimeout(resolve, 3000, 'Krish reached the destination');
//     else
//         reject('Krish not reached');
// })

// const car2 = new Promise((resolve,reject) => {
//     const reached =true;
//     if(reached)
//         setTimeout(resolve, 2000, 'Kumar reached the destination');
//     else
//         reject('Kumar not reached');
// })

// const car3 = new Promise((resolve,reject) => {
//     const reached =true;
//     if(reached)
//         setTimeout(resolve, 1000, 'Krishna reached the destination');
//     else
//         reject('Krishna not reached');
// })

// // Promise.all([car1,car2,car3])
// // Promise.allSettled([car1,car2,car3])
// // Promise.any([car1,car2,car3])
//  Promise.race([car1,car2,car3])
// .then((msg) => console.log(msg))
// .catch((msg) => console.log(msg))
