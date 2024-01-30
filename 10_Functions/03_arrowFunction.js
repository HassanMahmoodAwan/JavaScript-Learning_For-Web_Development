"use strict"

// this -> Current Context.

const user = new Object(
    {
        firstName : "Hassan Mahmood",
        professional: "Software Engineer",
        Note: function(){
            console.log(`${this.firstName} is a ${this.professional}`)
            console.log(this)
        }
    }
)

console.log(this)                   // {} Empty as Node JS.
// Note: for Browser, global context is Window. 


const newUser = function(){
    let username = "Ali"
    console.log(this)                // Have lots of contexts.
    console.log(this.username)       // undefined.
}



// ===== Arrow Function =======  (can used as Anonymous Function)

const addTwo = (no1, no2) =>{
    console.log(this)                // {}.
    return no1 + no2
}

const addNos = (no1, no2) => no1 + no2      // not preferred.

const addNo = (no1, no2) => (no1 + no2)    // Most used in ReactJS.


// ====== Creating Object using Arrow Function. ======
const myFunc = () => ({"username": "Ali"})
console.log(myFunc())