// for Each Loop: Works on Array, String.
// ==> Callbacks function.

const newArray = [1, 2, 3, 4, 5, 6]
newArray.forEach(function (item){
    console.log(item)
} )

const myArray = new Array(10, 12, 15)
myArray.forEach(function (item, index, array){
    console.log(item + " at index: " +  index)
    console.log(array)
})

myArray.forEach((items)=>(console.log(items)))  // Works.

const languages = [
    {
        language: "Python",
        extension: ".py"
    },
    {
        language: "Javascript",
        extension: ".JS"
    },
    {
        language: "RUST",
        extension: ".RS"
    },   
]

languages.forEach((items, index)=>{
    console.log(items["language"])
})


// Note: ForEach Loop doesn't Return Anything.
const lang = languages.forEach((items, index)=>(index))
console.log(lang)                              // Returns undefined.