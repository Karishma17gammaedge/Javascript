// const employee={
//     name:"karishma",
//     eid:"1234",
    
// }
// let newemployee = employee
// let shallowemp = {...employee}

// // console.log("Employee=> ", newemployee);
// console.log(shallowemp,"dfghjk")
// shallowemp.name = "gunjan"
// console.log(shallowemp)
// console.log(employee)

// shallow copy

const original ={
    name:"karishma",
    adress:{
        city:"indore",
        state:"madhya pradesh"
    }
}

const shallowcopy = {...original}
shallowcopy.adress.city = "mumbai"
console.log(original,"original object")
console.log(shallowcopy,"shallow copy")

// deep copy

const user ={
    name:"karishma",
    adress:{ 
        city:"indore",
        state:"madhya pradesh"
    }
}


const deepcopy = structuredClone(user)
deepcopy.adress.city = "mumbai"
console.log(user)
console.log(deepcopy,"deepcopy")



// const deepcopy =JSON.parse(JSON.stringify(user))
// deepcopy.adress.city = "mumbai"
// console.log(user,"original user")
// console.log(deepcopy,"deepcopy")