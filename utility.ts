interface User {
    name:string,
    email:string,
    age:number
}

type Partialuser = Partial<User>

const person:Partialuser = {
    name:"karishma"
}

console.log(person)


// interface User {
//     name:string,
//     email?:string,
//     age?:number,
//     roles:mainroles,
// }



// type Roles = "admin"|"user"|"manager"

// type mainroles = Exclude<Roles , "user">
// // let obj :{roles:mainroles} = {
// //     // name:"karishma",
// //     // email:"345675678"
// //     roles :"admin"
// // }

// let obj :User = {
//     name:"karishma",
//     roles:"admin"
// }


// console.log(obj)


// type Car = Record<string, string | string | number>;

// const myCar: Car = {
//     make: 'Toyota',
//     model: 'Camry',
//     year: 2022,
// };

// console.log(myCar)

    // interface UserInfo {
    //   name: string;
    //   age: number;
    // }

    // type UserDatabase = Record<string, UserInfo>;

    // const users: UserDatabase = {
    //   'john.doe': { name: 'John Doe', age: 30 },
    //   'jane.smith': { name: 'Jane Smith', age: 25 },
    // };
    
    // console.log(users)

// interface Employee extends User{
//     eid:number|string,
//     department:string
// }

// type fulluser = Required<User>
// type Partialuser = Partial<User>
// type Readuser = Readonly<User>
// type Picktype = Pick<User , "name"|"age">

// let person:User = {
//     name:"karishma",
//     email:"12345",
//     age:20
//     // eid:"12345",
//     // department:"technical"
// }

// console.log(person)





// type Users<T> ={
//     [K in keyof T] : string;
// }

// interface employee {
//     name:string,
//     age:number,
//     id?:number
// }

// type person = Users<employee>


// const emp1:person = {
//     name:"karishma",
//     age:"20"
// }

// console.log(emp1)


// interface ApiResponse {
//     name:string,
//     image:string|null,
// }


// type SafepiResponse = {
//     [K in keyof T] : NonNullable<T[K]>
// }

// type response = SafepiResponse<ApiResponse>


