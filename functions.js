function primenumber(num){
    if(num<=0) return false;
    if(num == 1) return false;
    // if(num==2) return true;

    for(let i=2;i<Math.sqrt(num); i+=2){
        if(num%2==0){
           return false;
            
        }
            return true;
        
    }
}
// const result = primenumber(10)
// console.log(result);




// Finding largest number in an array

function largestNumber(arr){
    let largest = arr[0];

    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest = arr[i];
        }
    }
    return largest;

}
let result = largestNumber([1,2,3,4,6,5])
console.log(result);



// const counter =()=>{
//    let i;
//     for( i=0;i<10;i++){
//       console.log(i);
      
//     }
//     return i; 
// }

// counter();

const n = 5;
for (let i = 1; i <= n; i++) {
    let str = '';
    for (let j = 1; j <= i; j++) {
        str += "*" + ' ';
    }
    console.log(str);
}




