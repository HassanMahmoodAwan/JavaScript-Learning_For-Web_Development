const body = document.querySelector("body")
console.log(body)
const allBoxes = document.querySelectorAll(".box")    // Return NodeList


allBoxes.forEach( (item)=>{
    item.addEventListener('click', (event)=>{
        body.style.backgroundColor = event.target.style.backgroundColor
    })
})