// ==> All dataTypes to Number
let score = "23 hello 23"
let firstName = "John"
let flag = true
let one;
let salary = null  //-> 0

console.log(Number(score), parseInt(score),  typeof Number(score), typeof parseInt(score), Number(firstName), 
typeof Number(firstName)) 
console.log(Number(flag), typeof Number(flag), Number(salary), typeof Number(salary), 
Number(one), typeof Number(one)  )


// ==> Data Types to Boolean
console.log(Boolean(score), typeof Boolean(score), Boolean(firstName), 
typeof Boolean(firstName)) 
console.log(Boolean(flag), typeof Boolean(flag), Boolean(salary), typeof Boolean(salary), 
Boolean(one), typeof Boolean(one), Boolean(-1)  )

/* 
    1- 33 -> true 
    2- 0 -> false
    3- null -> false
    4- undefined -> false
    5- "" -> false; " " -> true; "abc" -> true
*/
