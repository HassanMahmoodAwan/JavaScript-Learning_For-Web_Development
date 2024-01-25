// 1---- Primitive -> (STACK)

let userName = "Hassan Mahmood"
let customerName = userName   
console.log(customerName)

customerName = "Hassan Mahmood Awan"

console.log(userName)           // Different.
console.log(customerName)   


// 2---- Non-Primitive -> (STACK + HEAP) -> Stack have reference of HEAP memory block.

let student = {
    name: "John",
    age: 23,
    regular: true
}
let competitionId = student

competitionId["name"] = "John Khan"

console.log(student)
console.log(competitionId)      // Same.