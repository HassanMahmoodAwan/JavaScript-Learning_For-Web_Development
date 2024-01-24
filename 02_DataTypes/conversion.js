// ==> All dataTypes to Number
let score = "23 hello"
let firstName = "John"
let flag = true
let one;
let salary = null

console.log(Number(score), typeof Number(score), Number(firstName), 
typeof Number(firstName)) 
console.log(Number(flag), typeof Number(flag), Number(salary), typeof Number(salary), 
Number(one), typeof Number(one)  )


// ==> Data Types to Boolean
console.log(Boolean(score), typeof Boolean(score), Boolean(firstName), 
typeof Boolean(firstName)) 
console.log(Boolean(flag), typeof Boolean(flag), Boolean(salary), typeof Boolean(salary), 
Boolean(one), typeof Boolean(one)  )

/* 
    1- 33 -> true 
    2- 0 -> false
    3- null -> false
    4- undefined -> false
    5- "" -> false; " " -> true; "abc" -> true
*/
