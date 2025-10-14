// object that called function

// const obj ={
//     name:"karishma",
//     greet:function (){
//         console.log(`hello this is ${this.name}`);
        
//     }
// }

// obj.greet()


// const newobj = {
//     name:"manisha",
//     greet:function(){
//         // name:"manisha",
//         function inner(){
//             console.log(`hello from ${this.name}`);
//         }
//         inner()
//     }
// }

// newobj.greet()
// https://jsonplaceholder.typicode.com/posts/1

// function fetchWithRetry(url, retries = 3) {
//   return fetch(url)
//     .then(res => res.json())
//     .catch(err => {
//       if (retries > 0) {
//         console.log("Retrying...", retries);
//         return fetchWithRetry(url, retries - 1);
//       } else {
//         throw err;
//       }
//     });
// }
// fetchWithRetry("https://jsonplaceholder.typicode.com/posts/1")
//   .then(data => console.log("Data fetched:", data))
//   .catch(err => console.error("Failed after retries:", err));


// const promise1 = new Promise((resolve, reject) => {
//     let number = 4
//     if(number % 2 == 0)resolve("number is even")
//         else reject ("number is odd")
    
    
// })

// promise1.then((result)=>console.log(result))
// .catch((error)=>console.log(error)
// )e

// const userPromise = fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json())

// Promise.all([userPromise]).then(([users])=>console.log(users)).catch((error)=>console.log("error fetching data",error)
// )


// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 500, "one");
//   });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(reject, 600, "two");
// });

// Promise.race([promise1, promise2]).then((value) => {
//   console.log(value);
// }).catch((error)=>console.log("rejected",error)
// );

// const promise1 = new Promise((res,rej)=>{
//     res("promise resolved")

// })

// const promise2 = new Promise((res,rej)=>{
//     rej("promise rejected")
// })

// Promise.race([promise1,promise2]).then((result)=>{
//     console.log(result);
    
// }).catch((error)=>{
//     console.log(error);
    
// })

const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content (async):', data);
});
console.log('This line executes before the file content is logged (async).');





const fs = require('fs');

try {
    const data = fs.readFileSync('example.txt', 'utf8');
    console.log('File content (sync):', data);
} catch (err) {
    console.error('Error reading file:', err);
}
console.log('This line executes after the file content is logged (sync).');

