// checkRooms()
//     .then(checkTickets)
//     .then(success)
//     .catch(failed);

// function checkRooms (){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             console.log('Checking the hotel rooms');
//             const availableRooms = true;
    
//             if (availableRooms) {
//                 resolve('There are rooms');
//             } else {
//                 reject('There are no rooms');
//             }
//         },1500)
//     }
// }

// function checkTickets(data){
//     return new Promise(function(resolve, reject){
//         setTimeout(() => {
//             console.log('---then1---');
//             console.log('The answer in the previous step:', data);
//             console.log('Checking the tickets');
//             const availableTickets = true;

//             if (availableTickets) {
//                 let message = 'There are tickets';
//                 resolve(message);
//             } else {
//                 let message = 'There are no tickets';
//                 reject(message);
//             }
//         }, 1000)
//     });
// }

// function success(data){
//     console.log('--then2--');
//     console.log('The answer in the previous step:', data);
//     console.log('Going on vacation !');
// }

// function failed(data){
//     console.log('--catch--');
//     console.log('The answer in the previous step:', data);
//     console.log('Not going on vacation !');
// }

// ===================== Async functions ========================

// function promiseFunction() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             const result = false;
//             if (result) {
//                 resolve('DONE!');
//             } else {
//                 reject('FAIL!')
//             }
//         },500)
//     })
// }

// async function startPromise(){

//     try {

//         /// ==== Resolve ====

//         let result = await promiseFunction();
//         console.log(result);
//     } catch (err) {

//         /// ==== Reject ====

//         console.log(err);
//     }
    
// }

// startPromise();


// ===================== Some async operations ==================

// function checkRooms (){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             console.log('Checking the hotel rooms');
//             const availableRooms = true;
    
//             if (availableRooms) {
//                 resolve('There are rooms');
//             } else {
//                 reject('There are no rooms');
//             }
//         },1500)
//     })
// }

// function checkTickets(data){
//     return new Promise(function(resolve, reject){
//         setTimeout(() => {
//             console.log('---then1---');
//             console.log('The answer in the previous step:', data);
//             console.log('Checking the tickets');

//             const availableTickets = true;

//             if (availableTickets) {
//                 let message = 'There are tickets';
//                 resolve(message);
//             } else {
//                 let message = 'There are no tickets';
//                 reject(message);
//             }
//         }, 1000)
//     });
// }

// function success(data){
//     console.log('--then2--');
//     console.log('The answer in the previous step:', data);
//     console.log('Going on vacation !');
// }

// function failed(data){
//     console.log('--catch--');
//     console.log('The answer in the previous step:', data);
//     console.log('Not going on vacation !');
// }

// async function checkVacation() {
//     try {
//         const roomsResult = await checkRooms();
//         const ticketsResult = await checkTickets(roomsResult);
//         success(ticketsResult);
//     } catch (error) {
//         failed(error)
//     }
// }

// checkVacation();