// creating a array
let UserNames = ["mahad", "ali", "zeshan", "admin", "usman"];

// using on each loop on array
UserNames.forEach(OneUser =>{
    if (OneUser === "admin"){
        console.log(`hello ${OneUser}, would you like to see status report?`)
    }else{
        console.log(`hello ${OneUser}, thank you for loging again.`)
    }
})