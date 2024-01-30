let score = 123.2343
let otherNumber = new Number(128.8966)
let hundreds = 100000000



console.log(score, typeof score)
console.log(otherNumber, typeof otherNumber)    // Object.

console.log(otherNumber.toString(), typeof otherNumber.toString())
console.log(String(otherNumber), typeof String(otherNumber))

console.log(otherNumber.__proto__)

console.log(otherNumber.toFixed(1))          // Roundoff as well.
console.log(otherNumber.toPrecision(4))
console.log(otherNumber.toPrecision(2))

console.log(hundreds.toLocaleString('en-IN'))     // default, American Style.

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.isNaN(otherNumber))
console.log(Number.NaN)
console.log(Number.POSITIVE_INFINITY)
console.log(Number.isFinite(otherNumber))