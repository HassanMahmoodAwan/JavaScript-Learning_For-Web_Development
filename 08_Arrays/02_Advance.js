const marvelHeros = ["Thar", "Spider man"]
const dcHeros = ["Superman", "Batman"]

marvelHeros.push(dcHeros)    // 2-D Array
marvelHeros.pop()

marvelHeros.concat(dcHeros)    // Need to Assign to New Array. Not work.
const allHeros = marvelHeros.concat(dcHeros)
console.log(allHeros)

console.log([...marvelHeros, ...dcHeros])
marvelHeros.push(...dcHeros)   // Changes marvel Heros Array.
console.log(marvelHeros)
console.log(` [ ${marvelHeros} ] \n [ ${dcHeros} ]`)


const newArray = [ 2, 10, [12, 3], [3, [6, 7 ] ] ]
newArray.flat(Infinity)                         // Not Changes Original.
console.log(newArray.flat(Infinity))



console.log(Array.isArray("Awan"))
console.log(Array.from("Hassan"))
console.log(Array.from({firstName: "Ali"}))   // Empty Array.

let score01 = 10
let score02 = 20
let score03 = 30

console.log(Array.of(score01, score02, score03))



