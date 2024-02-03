/* 
==> To Avoid CallBack Hell.
==> Take callback (Resolve) and (Reject).
==> .catch(), .then(), .finally()
==> Introduce By blueBird

Note: Run this File everyTime.
*/ 

const promiseOne = new Promise( (resolve, reject)=>{
    setTimeout( ()=>{
        console.log("My Promise")                       // Printed
    }, 1000)
})


const promiseTwo = new Promise( (resolve, reject)=>{
    setTimeout( ()=>{
        console.log("My Promise Two")                       // Printed
        resolve()                       
    }, 1000)
})
promiseTwo
.then( ()=>{
    console.log("Resolved Promise")
})
.finally(()=>(console.log("Always Excecute")
))



new Promise( (resolve, reject)=>{
    const error = true
    if (!error){
        resolve({username: "Hassan", career: "Javascript"})
    }else{
        reject("Handle Error using Catch")
    }
})
.then((user)=>{
    return user.username
})
.then( (userName)=>{
    console.log(userName)
})
.catch( (error)=>{
    console.log(error)
})
.finally( ()=>{
    console.log("Excecute after Reject | Resolve")
})



// Same work using Aysnc-Await
