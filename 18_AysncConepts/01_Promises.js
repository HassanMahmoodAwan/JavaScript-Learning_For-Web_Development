/* 
==> Do aysnc Task
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
    const error = false
    if (!error){
        resolve({username: "Hassan", career: "Javascript"})
    }else{
        reject("Handle Error using Catch")
    }
})
.then((user)=>{
    console.log(user)
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
const promiseThree = new Promise( (resolve, reject)=>{
    const error = true
    if (!error){
        resolve({userName: "Ali", career: "Software Engineer"})
    }else{
        reject("error Occured")
    }
})

async function consumeThree(promiseThree){
    try{
        const response = await promiseThree
        console.log(response.userName)
    }catch (error){
        console.log(error)
    }
}
consumeThree(promiseThree)


// ==== RealWorld Example using Fetch
// const URL = "https://jsonplaceholder.typicode.com/users"
const URL = "https://api.github.com/users/HassanMahmoodAwan"

async function getAllUsers(){
    try{
        const response = await fetch(URL)
        const data = await response.json()       // Processing take time.
        console.log(data.login)
    }
    catch(error){
        console.log(`Error: ${error}`);
    }

}
getAllUsers()


// Using Promises as fetch is a promise.
fetch(URL)
.then( (response) => (response.json()) )
.then( (data) => (console.log(data.id)) )
.catch( (error)=> (console.log(error)))
