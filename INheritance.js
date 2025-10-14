// example without inheritance


class Person {
    constructor(name){
        this.name = name
    }

    sayHello(){
        console.log(`hello i am ${this.name}`);
        
    }

}


const person1 = new Person("ALice")
console.log(person1.sayHello())






// use of inheritance

class student extends Person{
    constructor(name,grade){
        //inheriting from parent class
        super(name);
        this.grade = grade;
    }
    study(){
        console.log(`${this.name }studying in grade ${this.grade}`);
        
    }
}


const student1 = new student("karishma" , 10)
console.log(student1.sayHello());
console.log(student1.study());



// prototype based 

let animal = {
  eats: true,
  walk() {
      console.log("animal walk")
  }
};
let rabbit = {
  jumps: true,
  __proto__:animal
};
rabbit.walk()


let father ={
    name :"father"
}

let son ={
    name :"son"
}
// console.log(Object.getPrototypeOf(son))

Object.setPrototypeOf(son , father)
let abc = Object.getPrototypeOf(son)
console.log(abc)



let user = {
    name:"karishma",
    surname:"jain",
    
    set fullName(value){
        [this.name,this.surname] = value.split(" ")
    },
    get fullname(){
           return `${this.name} ${this.surname}`;
    }

}

let admin ={
    __proto__:user,
    
}
console.log(admin.fullname)

