
let string= "Apple, Banana, Kiwi";
let part1= string.substring(7, 13);
console.log(part1);


let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6);
console.log(part);



// nullish collesence operator


let height = null
let width = undefined

let area = height??100*width??50

console.log(area);
