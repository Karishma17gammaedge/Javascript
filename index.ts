// const user = {
//     name:"karishma",
//     age:20
// }
// interface User {
//     name:string,
//     age:number
    
// }

// let username:string ="karishma"
// let age:number = 20

// function greet(username:string,age:number):string{
//     return `hello this is ${username} and age is ${age}`
// }
// let greeting = greet(username , age)
// console.log(greeting)


// let userName: string = "Arjun";  
// let age: number = 25;            
// let isActive: boolean = true;    

// function greetUser(name: string, age: number): string {
//   return `Hello, ${name}! You are ${age} years old.`;
// }

// let greeting = greetUser(userName, age);
// console.log(greeting);


// const str: any = "GeeksforGeeks";
// const num: number = 6;
// const arr: (any | string)[] = 
//     ["GFG", "TypeScript", 500, 20,true];

// console.log(typeof str);
// console.log(typeof num);
// console.log(arr);

// function greet(name: string){
//     return `Hello, ${name}!`;
// }
// console.log(greet("Alice"));


// enums
// const value {
//     first,
//     second
// }


// let color = "red"
// color ="vlue"
// console.log(color)

// let color:"red" = "red"|"blue"
// color = "blue"
// console.log(color)

// typescript literals
type Direction = "Up" | 5| "Left" | "Right";

let move: Direction;

move = 5;
console.log(move)
// move = "Forward";



// object interfaces and nesting


interface user{
    name:string,
    age:number,
}

// interface Person{
//     email:string,
//     personal:user,
//     adress:string
// }

// const employee:Person = {
//     email:"12334",
//     personal:{
//         name:"karishma",
//         age :20,
//     },
//     adress:"indore"
    
// }


// console.log(employee.personal.name)

// type type_alias = number,string
interface reactangle {
    num1:number,
    num2:number
}

function arearectangle(rec:reactangle):number{
    return rec.num1*rec.num2
    
}
const myrec :reactangle={
    num1:2,
    num2:4
}

console.log(`Area: ${arearectangle(myrec)}`);



// function calculator(a:number,b:number,operator:string):number{
//     switch(operator.toLowerCase()){
//         case "add":
//         return a+b;
//         break;
//         case "mutiply":
//         return a*b;
//         break;
//         default:
//         console.log("error")
//     }
    
// }

// const call = calculator(4,4,"mutiply")
// console.log(call)


// function add<T >(num1:T , num2:T):T{
//     const num3 =num1 +num2
//     return num3
// }

// const addnum = add(1,2)
// console.log(addnum)




// function add(a:number,b:number){
//     return a+b;
// }
// const fun = add(2,3)
// console.log(fun)
function identity<T>(value:T):T{
    return value;
    
}

// function identity(value:any):any{
//     return value;
    
// }

// const result = identity(42)
// result.toUpperCase()
// console.log(result)
// console.log(identity<number>(42))

