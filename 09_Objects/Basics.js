// Using Constructor -> Singleton
// Using Object Literal -> Multi-Instances of Object.

let mySymbol = Symbol("221000")

const student = {
    name : "Hassan",
    "Last name": "Mahmood", 
    age : 23,
    gpa : 2.74,
    [mySymbol]: "Key01",
    city: "Lahore"
} 

console.log(student.name)           // Not Preferred.
console.log(student["Last name"])   // How access using Dot operator.

// Accessing a Symbol.
console.log(student[mySymbol]) 

// Object.freeze(student)
student["name"] = "Hassan Mahmood"

// Adding a Function in a Object.
student.greetings= function(){
    console.log(`Hello ${this.name}`)
}

console.log(student.greetings())        // also give Undefine as well.



