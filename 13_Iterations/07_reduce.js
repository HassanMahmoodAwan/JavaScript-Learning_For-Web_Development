// Accumulator: takes sum of pervious input.

const numbers = [1,2,3]

const initialValue = 0
const sum = numbers.reduce( (accumulator, currentValue)=> {
    return accumulator + currentValue 
}, initialValue)

console.log(sum)


const Courses = [
    {courseName: "JS Mastery", price: 5000},
    {courseName: "ReactJS BootCamp", price: 7000},
    {courseName: "Mobile App Dev", price: 7999},
]

const tax = 299
const totalPrice = Courses.reduce( 
    (acc, currentValue)=>(acc + currentValue.price), tax)

console.log(totalPrice)


const cart = new Array(10, 20, 12.99, 4.01)
const totalPrices = cart.reduce((acc, currVal)=>{
    return acc + currVal
}, taxes = 20)
console.log(totalPrices);
