// const car ={
//     name:"ferrari",
//     type:"4 wheeler"
// }
// console.log(car.name);


// constructor objects

function Car(brand,model) {
    this.brand = brand
    this.model = model
    
}


const myCar = new Car('ford' , 'ferrari')

console.log(myCar.brand);


// another way to build constructor without this


function students (name,course){
    return{
        name:name,
        course:course,
    }
}

const allstudents = new students("karishma","b.tech")
console.log(allstudents,"hgewge");


function college(department,course) {
    return{
        department:department,
        course:course,   
 }
    
}

const myCollege = new college("sage","btech")
let {department,course} = myCollege
console.log(department,"mydepartment");
// console.log(myCollege.department);








// this function


// const person ={
//     name:"Bob",
//     greet(){
//         console.log(this.name);
//     }
// }

// const greenfn = person.greet
// greenfn()


function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

console.log(user.name);




// optional chaining


let key = "firstname"

let user1 ={
    firstname:"John"
}
let user2 = null;

console.log(user1?.[key]);


// object destructuring


let users = {
    name:"Karishma",
    age:null,
    address:null
}
// console.log(users);

let {name , age , adress} = users
console.log(name);



