function one(username){
    this.username = username
}

function two(username, email){
    one.call(this, username),
    this.email = email,

    this.display = function(){
        console.log(`${this.username} ${this.email}`);
    }
}
const obj = new two("Hassan", "hsn@DeepMindAlgo.com")
obj.display()