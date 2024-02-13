let newDate = new Date()

console.log(newDate, typeof newDate)

console.log(newDate.toString())
console.log(newDate.toLocaleString())
console.log(newDate.toLocaleDateString())
console.log(new Date(2024, 0, 26, 7, 2).toLocaleString())
console.log(new Date('01-26-2024').getTime())
console.log(newDate.toDateString())
console.log(Date.now())                // MiliSeconds


// Compare both values:
console.log(Date.now())              // Milliseconds.
console.log(newDate.getTime())
console.log(Math.floor(newDate.getTime() / 1000))



console.log(newDate.getMonth() + 1)   // Month starts from 0.
console.log(newDate.getDate())
console.log(newDate.getFullYear())
