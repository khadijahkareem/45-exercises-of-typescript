let userName = ["mahad", "ali", "zeshaan", "admin", "usman"]

if (userName.length === 0){
    console.log("your array is empty we need to find some users!")
}else{
    userName.forEach(oneUser =>{
    if(oneUser === "admin"){
        console.log(`hello ${oneUser}, would you like to see status report?`)
    }else{
        console.log(`hello ${oneUser}, thank you for logimg again.`)
    }
    })
}