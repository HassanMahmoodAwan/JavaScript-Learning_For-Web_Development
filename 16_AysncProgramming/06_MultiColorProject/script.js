const startBtn = document.getElementById('startBtn')
const stopBtn = document.getElementById('stopBtn')

const randomColor = function(){
    hex = "0123456789ABCDEF"
    color = '#'
    for (let i = 0; i < 6; i++){
        color += hex[parseInt(Math.random() * 16)]
    }
    return color
}

function changeFunc(){
    document.body.style.backgroundColor = randomColor()
}

let Interval;
startBtn.addEventListener('click', ()=>{
    if (!Interval) Interval = setInterval(changeFunc, 500)
}, false)


stopBtn.addEventListener('click', ()=>{
    clearInterval(Interval)
    Interval = null
})