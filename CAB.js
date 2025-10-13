

// apply

const person ={
    fullname:function(){
        return this.firstname + "  "+ this.lastname
    }
}

const person1 = {
    firstname:"karishma",
    lastname:"jain",
}

console.log(person.fullname.apply(person1))


// bind


const user = {
    firstname:"manisha",
    lastname:"choudhary",
    fullname:function(){
       return this.firstname+" "+this.lastname

    }
}


const user1 ={
    firstname:"asdfghjk",
    lastname:"euioiuyt"
}

let fullname = user.fullname.bind(user1)
console.log(fullname());


