console.log("2" > 1)
console.log("02" > 1)

console.log(null > 0)
console.log(null >= 0)
console.log(null == 0)
// Note: [ ==, === ] and [ >=, <, >, <= ] works differently.

console.log(undefined == NaN)
console.log(undefined >= NaN)
console.log(undefined >= 0)


console.log("2" == 2)
console.log("2" === 2)


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId) // false.
console.log(id == Symbol('123')) // true.

// ==== BigInt ====
let bigNumber = 12232342353453453423423423423n
