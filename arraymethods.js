// console.log("hello");
// const obj = {
//     name:"Karishma Jain",
//     age: 20
// }

// let user = { name: 'John' };

// let admin = user;

// admin.name = 'Pete';

// console.log(user.name);



// let text = "HELLO WORLD";
// let char = text.charAt(0);
// console.log(char);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// let myList = fruits.toString();
// console.log(myList);

// fruits.push("hhhh");
// fruits.shift()


// const arr= [10, 20, 30, 40];
// const sliced = arr.slice(1,2); 

// console.log(sliced);
// console.log(arr);



// const array= [10, 20, 30, 40];
// const removed = arr.splice(1, 3); 

// console.log(removed); 
// console.log(arr);   

// console.log(Math.floor(Math.random() * 10));


// const object = JSON.parse('{"name":"John", "age":30, "city":"New York"}');

// console.log(obj);


// let string= "Apple, Banana, Kiwi";
// let part1= str.substring(7, 13);

// let str = "Apple, Banana, Kiwi";
// let part = str.substr(7, 6);
// console.log(part);


const numbers = [1, 2, 3, 4];
const doubled = numbers.map(item => item * 2);
console.log(doubled); 


const number = [1, 2, 3, 4];
const evens = number.filter(item => item % 2 === 0);
console.log(evens);


const numbers1 = [1, 2, 3, 4];
const sum = numbers1.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum); 



const car = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const car_more = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
}

const mycar = {...car, ...car_more}



console.log(mycar);

