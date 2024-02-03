/* 
==> To Avoid CallBack Hell.
==> Take callback (Resolve) and (Reject).
==> .catch(), .then(), .finally()

*/ 

const promiseOne = new Promise( (resolve, reject)=>{
    setTimeout( ()=>{
        console.log("My Promise")                       // Printed
    }, 1000)
})


const promiseTwo = new Promise( (resolve, reject)=>{
    setTimeout( ()=>{
        console.log("My Promise")                       // Printed
        resolve()                       
    }, 1000)
})

promiseTwo

