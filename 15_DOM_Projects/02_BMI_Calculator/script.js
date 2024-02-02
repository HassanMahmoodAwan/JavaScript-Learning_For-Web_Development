const btn = document.getElementById('btn')
let result = document.querySelector("#result")



btn.addEventListener('click', (event)=>{
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value

    weight = Number(weight)
    height = Number(height)

    if(height == '' || height <= 0 || isNaN(height)){
        result.innerHTML = `Invalid Input to Height: ${height}`
        

    }else if(weight == '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Invalid Input to weight: ${weight}`
        
    }else {

        height = height / 100

        const answer = (weight / Math.pow(height, 2)).toFixed(2)
        result.innerHTML = `Result:   ${answer}`
    }
    
    
})