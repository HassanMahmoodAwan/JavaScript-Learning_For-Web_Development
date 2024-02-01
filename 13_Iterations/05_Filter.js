const numbers = [1, 2, 3, 4, 5, 6]

const greater4 = numbers.filter( (no)=>(no > 4 && no <= 10) )
console.log(greater4)

// SameThing using forEach.
const newArr = []
numbers.forEach( (no)=>{
    if(no > 4) newArr.push(no)
})
console.log(newArr)