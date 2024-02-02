// Message for not repeating Numbers (Unique).

const inputForm = document.querySelector("#actionForm")
const guessArray = document.querySelector("#guessArray").querySelector("span")
const Message = document.querySelector("#Message").querySelector("p")
const remainGuess = document.querySelector("#remainGuess")



let counter = 10
let prevGuesses = []
let random_Number


function guessGame(){
    counter = 10
    prevGuesses = []
    
    random_Number = Math.round(Math.random() * 100 + 1)
    console.log(random_Number)
}
guessGame()

inputForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    let guessInput = parseInt(document.querySelector('#guessInput').value)
    counter--
    
    if (guessInput == random_Number){
        Message.innerHTML = `you find that Number in ${10-counter} tries`
        guessGame()
    }
    else if (Number.isNaN(guessInput)){
        Message.innerHTML = "Invalid Input"
        prevGuesses.push("Invalid")
    }
    else{
        Message.innerHTML = ''
        prevGuesses.push(guessInput)
    }

    if (counter == 0){
        Message.innerHTML = `your Tries finishes, actual Number is ${random_Number}`
        guessGame()
    }

    guessArray.innerHTML =  `Previous Guesses : [ ${prevGuesses} ]`
    remainGuess.innerHTML = `Guess Remaining: ${counter}`
    
})