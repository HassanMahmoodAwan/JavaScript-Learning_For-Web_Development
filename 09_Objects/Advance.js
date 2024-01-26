// Singleton
const linkedinUser = new Object(
    {
        id: "123abc",
        name: "John",
        email: "John@abc.com",
        greetings: function(){
            console.log(`Hello &{this.name}`);
        }
    }
)

linkedinUser["age"] = 22

// Merging two Objects.
const one = {a:1, b:2}
const two = {c:3, d:4}

console.log({one, two})      // Nested Objects.

const third = Object.assign({}, one, two)
console.log(third)

const newObj = {...one, ...two}
console.log(newObj)


// Arrays of Object.
const users_API_data = [
    {id: "1213", userName: "John"},
    {id: "1214", userName: "Smith"},
    {id: "1215", userName: "Wood"},
]
console.log(users_API_data[1]["userName"]);


// Methods
console.log(Object.keys(linkedinUser))     // Returns Array
console.log(Object.values(linkedinUser))
console.log(Object.entries(linkedinUser))  // Nested Array

console.log(linkedinUser.hasOwnProperty("name")) 


// OBJECT De-Structuring: -> linkedinUser
console.log(linkedinUser.email)

const {email: e} = linkedinUser
console.log(e)


// const navbar  = ({company})=>{
//     console.log(`${company}`)
// }
// navbar(company = "DeepMind Algo")


// API website : RandomUser.me