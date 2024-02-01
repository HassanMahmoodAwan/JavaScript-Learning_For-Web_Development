// Comparison Operator ->  ==, ===
// Relational Operator ->  <, >, >=, <=, !=,!==
// Logical Operator -> &&, ||, !

// Note: Comparisons and Relational Operators behave differently.

const balance = 1000
const user = true

if (balance >= 500 || user){
    const reward = true
    console.log(reward)
}
console.log(reward)         // Error as no Scope.


// if statement short-hand.
if (user) console.log("User is logged in.")

if (balance >= 500) console.log("Balance is greater than 500."),
console.log("user is not logged in.")   // Unreadable Code.

