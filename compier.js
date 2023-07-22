const user ={
    name:"hi",
    greet(){
        console.log("hi console greets")
    }
}

for(let key in user){
    console.log(key+":"+user[key]);
}