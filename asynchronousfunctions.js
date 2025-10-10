
// asynchronous functions
// console.log('before')
// setTimeout(() => {
//   console.log('inside the function')
// }, 2000)
// console.log('after')



// promises

const promise = new Promise((resolve,reject)=>{
   let success = true
   if(success){
    resolve("promise resolves")
   }
   reject("promise rejected")
})


promise
.then(result =>console.log(result))
.catch(error=>console.log(error))



// by async await functions


const fetchdata = new Promise((resolve,reject)=>{
    console.log("Fetching data");
    setTimeout(()=>{
        const victory = false

        if(victory){
            resolve("data received")
        }else{
            reject("failed to load")
        }
    },2000)
    
})

fetchdata.then(result=>console.log(result))
.catch(error=>console.log(error))


// callbacks


function greet(name){
    console.log(`Hello ${name}`);
}

function ProcessInput(callback){
    const name ="karishma";
    callback(name)
}

ProcessInput(greet)



// fetching an api

async function apicall(){
    try {
        const response = await fetch(apiurl)
        console.log(response?.JSON);
        
    } catch (error) {
        console.log("Eror fetching data");
    }
}



let json = "{ bad json }";

try {

  let user = JSON.parse(json); 
  console.log( user.name ); 

} catch (err) {
  
  console.log( "Our apologies, the data has errors, we'll try to request it one more time." );
  console.log( err.name );
  console.log( err.message )
}
