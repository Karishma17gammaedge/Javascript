

// console.log('A');

// setTimeout(() => {
//   console.log('B');
//   Promise.resolve().then(() => {
//     console.log('C');
//   });
// }, 0);

// Promise.resolve().then(() => {
//   console.log('D');
//   setTimeout(() => {
//     console.log('E');
//   }, 0);
// });

// console.log('F');



// promise chaining

// console.log("1");
// setTimeout(()=>{
//     console.log("2");
//     Promise.resolve().then(()=>{
//         console.log("3");
//     }).then(()=>{
//         console.log("4");
//     })
    
// }
// ,0)

// Promise.resolve().then(()=>{
//     console.log("5");
    
// }).then(()=>{
//     console.log("6");
    
// });

// console.log("7");



console.log("start");
setTimeout(()=>{
    console.log("Timeout 1");
    
},0)

Promise.resolve().then(()=>{
    console.log("Promise 1");
    setTimeout(()=>{
        console.log("Timeout 2");
        
    },0);
    return Promise.resolve()
}).then(()=>{
    console.log("Promise 2");
    
});

console.log("End");










