let firstName = "Hassan"
let age = 22

console.log("First name: " + firstName + ", Age: " + age)
console.log(`First name: ${firstName.toUpperCase()}, Age: ${age}`)        // Backticks Used.

// String Object.
const Company = new String("DeepMind Algos")
console.log(Company, typeof Company)        // Object.   Run it on Browser Console.


// Strings Functions/Methods

console.log(Company.length)

console.log(Company[2])
console.log(Company.__proto__)



console.log(Company.charAt(3))
console.log(Company.indexOf('A'))


console.log("      Hello World!      ".trim())


console.log(Company.substring(2, 5))
console.log(Company.slice(-4, 3))

console.log(Company.replace(" ", "-"))


console.log(Company.includes("DeepM"))

let companyCharArray = Company.split("")
console.log(companyCharArray)

console.log(companyCharArray.join('-'))




