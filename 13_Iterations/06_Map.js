const numbers = [1, 2, 3, 4]

// Add 10 to each number.
let result = numbers.map( (no)=>(no + 10))
console.log(result)                         // Array.

// Using forEach.
let sumArr = []
numbers.forEach( (items)=>{
    sumArr.push(items + 10)
})
console.log(sumArr)


// ==== Function Chaining ====
const answer = numbers
                .map( (no)=>(no * 10) )
                .map( (no)=>(no / 2) )
                .filter( (no)=>( no > 1 ) )

console.log(answer)

