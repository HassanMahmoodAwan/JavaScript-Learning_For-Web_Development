console.log(Math)       // Run on Browser.

console.log(Math.round(15.7))           // 16
console.log(Math.floor(4.9))
console.log(Math.ceil(4.01))            // 5
console.log(Math.min(12, 4,6,7,8))
console.log(Math.max(12, 4,6,7,8))


console.log(Math.random())   // 0 to 1

console.log((Math.random() * 10)+ 1)   // 1 to 10 + decimal Part.
console.log(Math.floor((Math.random() * 10)+ 1))   // 1 to 10.




// ==> Having Min and Max Value, Range.
let min = 14
let max = 25

console.log(Math.floor((Math.random() * (max - min + 1)) + min))
